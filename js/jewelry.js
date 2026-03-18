(function () {
  if (typeof CATEGORIES === "undefined" || typeof PRODUCTS === "undefined") return;

  const views = {
    categories: document.getElementById("view-categories"),
    grid: document.getElementById("view-grid"),
    detail: document.getElementById("view-detail"),
  };
  const breadcrumb = document.getElementById("breadcrumb");
  const modal = document.getElementById("inquiry-modal");

  if (!views.categories) return;

  let currentCategory = null;
  let currentSubcategory = null;

  // ── Helpers ──

  function showView(name) {
    Object.entries(views).forEach(([key, el]) => {
      el.style.display = key === name ? "" : "none";
      if (key === name) {
        el.style.animation = "none";
        el.offsetHeight; // reflow
        el.style.animation = "";
      }
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function findCategory(id) {
    return CATEGORIES.find((c) => c.id === id);
  }

  function findSubcategory(catId, subId) {
    const cat = findCategory(catId);
    return cat ? cat.subcategories.find((s) => s.id === subId) : null;
  }

  function getProducts(catId, subId) {
    return PRODUCTS.filter(
      (p) => p.category === catId && p.subcategory === subId
    );
  }

  function getProduct(style) {
    return PRODUCTS.find((p) => p.style === style);
  }

  // ── Breadcrumb ──

  function updateBreadcrumb(parts) {
    breadcrumb.innerHTML = "";
    parts.forEach((part, i) => {
      if (i > 0) {
        const sep = document.createElement("span");
        sep.className = "sep";
        breadcrumb.appendChild(sep);
      }
      if (part.href) {
        const a = document.createElement("a");
        a.href = part.href;
        a.textContent = part.label;
        a.addEventListener("click", (e) => {
          e.preventDefault();
          if (part.action) part.action();
        });
        breadcrumb.appendChild(a);
      } else {
        const span = document.createElement("span");
        span.className = "current";
        span.textContent = part.label;
        breadcrumb.appendChild(span);
      }
    });
  }

  // ── View 1: Category Menu ──

  function buildCategoryMenu() {
    const menu = document.getElementById("cat-menu");
    menu.innerHTML = "";

    CATEGORIES.forEach((cat) => {
      const group = document.createElement("div");
      group.className = "cat-group";

      const label = document.createElement("span");
      label.className = "cat-group__label";
      label.textContent = cat.label + ":";
      group.appendChild(label);

      const subs = document.createElement("div");
      subs.className = "cat-group__subs";
      cat.subcategories.forEach((sub) => {
        const a = document.createElement("a");
        a.href = "#" + cat.id + "/" + sub.id;
        a.textContent = sub.label;
        a.addEventListener("click", (e) => {
          e.preventDefault();
          navigateTo(cat.id, sub.id);
        });
        subs.appendChild(a);
      });
      group.appendChild(subs);
      menu.appendChild(group);
    });

    document.getElementById("procurement-text").textContent = PROCUREMENT_TEXT;
  }

  function showCategories() {
    currentCategory = null;
    currentSubcategory = null;
    updateBreadcrumb([{ label: "Jewelry" }]);
    showView("categories");
    history.pushState(null, "", "jewelry.html");
  }

  // ── View 2: Product Grid ──

  function showGrid(catId, subId) {
    currentCategory = catId;
    currentSubcategory = subId;

    const cat = findCategory(catId);
    const sub = findSubcategory(catId, subId);
    if (!cat || !sub) return showCategories();

    updateBreadcrumb([
      { label: "Jewelry", href: "#", action: showCategories },
      { label: cat.label, href: "#", action: showCategories },
      { label: sub.label },
    ]);

    const products = getProducts(catId, subId);
    const grid = document.getElementById("product-grid");
    grid.innerHTML = "";

    products.forEach((p) => {
      const card = document.createElement("a");
      card.className = "jewelry-card";
      card.href = "#product/" + p.style;
      card.addEventListener("click", (e) => {
        e.preventDefault();
        showDetail(p.style);
      });

      card.innerHTML =
        '<div class="jewelry-card__image"><img src="' +
        p.image +
        '" alt="' +
        escapeHtml(p.name) +
        '" loading="lazy"></div>' +
        '<div class="jewelry-card__body">' +
        '<span class="jewelry-card__category">Style #' +
        p.style +
        "</span>" +
        '<h3 class="jewelry-card__title">' +
        escapeHtml(p.name) +
        "</h3>" +
        "</div>";

      grid.appendChild(card);
    });

    showView("grid");
    history.pushState(null, "", "#" + catId + "/" + subId);
  }

  // ── View 3: Product Detail ──

  function showDetail(style) {
    const p = getProduct(style);
    if (!p) return;

    const cat = findCategory(p.category);
    const sub = findSubcategory(p.category, p.subcategory);

    updateBreadcrumb([
      { label: "Jewelry", href: "#", action: showCategories },
      {
        label: cat ? cat.label : "",
        href: "#",
        action: function () {
          showGrid(p.category, p.subcategory);
        },
      },
      {
        label: sub ? sub.label : "",
        href: "#",
        action: function () {
          showGrid(p.category, p.subcategory);
        },
      },
      { label: p.name },
    ]);

    const detail = document.getElementById("product-detail");
    let specsHtml = "";

    if (p.metals) {
      specsHtml +=
        '<div class="product-detail__spec"><span class="product-detail__spec-label">Metals</span><span class="product-detail__spec-value">' +
        escapeHtml(p.metals) +
        "</span></div>";
    }
    if (p.sizes) {
      specsHtml +=
        '<div class="product-detail__spec"><span class="product-detail__spec-label">Sizes</span><span class="product-detail__spec-value">' +
        escapeHtml(p.sizes) +
        "</span></div>";
    }
    if (p.karats) {
      specsHtml +=
        '<div class="product-detail__spec"><span class="product-detail__spec-label">Karats</span><span class="product-detail__spec-value">' +
        escapeHtml(p.karats) +
        "</span></div>";
    }

    detail.innerHTML =
      '<div class="product-detail__image"><img src="' +
      p.image +
      '" alt="' +
      escapeHtml(p.name) +
      '"></div>' +
      '<div class="product-detail__info">' +
      '<h2 class="product-detail__name">' +
      escapeHtml(p.name) +
      "</h2>" +
      '<div class="product-detail__style-row">' +
      '<a href="#inquiry/' +
      p.style +
      '" class="product-detail__style" data-inquiry="' +
      p.style +
      '">Style #' +
      p.style +
      "</a>" +
      '<span class="product-detail__pricing-hint">(Click Style # For Pricing)</span>' +
      "</div>" +
      '<p class="product-detail__desc">' +
      escapeHtml(p.description) +
      "</p>" +
      (specsHtml
        ? '<div class="product-detail__specs">' + specsHtml + "</div>"
        : "") +
      '<a href="#" class="product-detail__back" data-back>&larr; Return</a>' +
      "</div>";

    detail
      .querySelector("[data-inquiry]")
      .addEventListener("click", function (e) {
        e.preventDefault();
        openInquiry(p.style);
      });

    detail
      .querySelector("[data-back]")
      .addEventListener("click", function (e) {
        e.preventDefault();
        showGrid(p.category, p.subcategory);
      });

    showView("detail");
    history.pushState(null, "", "#product/" + p.style);
  }

  // ── View 4: Inquiry Modal ──

  function openInquiry(style) {
    document.getElementById("modal-style").textContent = style;
    document.getElementById("inq-style").value = style;
    document.getElementById("inq-fname").value = "";
    document.getElementById("inq-lname").value = "";
    document.getElementById("inq-email").value = "";
    document.getElementById("inq-message").value = "";
    modal.style.display = "";
    document.body.style.overflow = "hidden";
  }

  function closeInquiry() {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }

  document.getElementById("modal-close").addEventListener("click", closeInquiry);
  modal.addEventListener("click", function (e) {
    if (e.target === modal) closeInquiry();
  });

  document
    .getElementById("inquiry-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const btn = this.querySelector(".btn--primary");
      const original = btn.textContent;
      btn.textContent = "Message Sent!";
      btn.style.background = "var(--color-green)";
      setTimeout(function () {
        btn.textContent = original;
        btn.style.background = "";
        closeInquiry();
      }, 2500);
    });

  // ── Routing ──

  function navigateTo(catId, subId) {
    showGrid(catId, subId);
  }

  function handleHash() {
    const hash = location.hash.replace("#", "");
    if (!hash) {
      showCategories();
      return;
    }

    if (hash.startsWith("product/")) {
      const style = hash.replace("product/", "");
      const p = getProduct(style);
      if (p) {
        currentCategory = p.category;
        currentSubcategory = p.subcategory;
        showDetail(style);
      } else {
        showCategories();
      }
      return;
    }

    if (hash.startsWith("inquiry/")) {
      const style = hash.replace("inquiry/", "");
      const p = getProduct(style);
      if (p) {
        currentCategory = p.category;
        currentSubcategory = p.subcategory;
        showDetail(style);
        openInquiry(style);
      }
      return;
    }

    const parts = hash.split("/");
    if (parts.length === 2) {
      showGrid(parts[0], parts[1]);
      return;
    }

    // Handle homepage links like #ladies, #cross, #wedding, #gents, #specialty
    const cat = findCategory(parts[0]);
    if (cat) {
      if (cat.subcategories.length === 1) {
        showGrid(cat.id, cat.subcategories[0].id);
      } else {
        showCategories();
      }
      return;
    }

    showCategories();
  }

  // ── Escape HTML ──

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // ── Init ──

  buildCategoryMenu();
  handleHash();
  window.addEventListener("popstate", handleHash);
  window.addEventListener("hashchange", handleHash);
})();
