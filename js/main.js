document.addEventListener('DOMContentLoaded', () => {

  // Mobile nav toggle
  const toggle = document.querySelector('.nav__toggle');
  const navLinks = document.querySelector('.nav__links');

  if (toggle) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      toggle.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggle.classList.remove('active');
      });
    });
  }

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.01, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));

  // Staggered children animation
  document.querySelectorAll('[data-stagger]').forEach(parent => {
    const children = parent.children;
    const staggerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          Array.from(children).forEach((child, i) => {
            child.style.opacity = '0';
            child.style.transform = 'translateY(30px)';
            child.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
            requestAnimationFrame(() => {
              child.style.opacity = '1';
              child.style.transform = 'translateY(0)';
            });
          });
          staggerObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    staggerObserver.observe(parent);
  });

  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Product gallery (if on product page)
  const mainImage = document.querySelector('.product-gallery__main img');
  const thumbs = document.querySelectorAll('.product-gallery__thumb');

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const img = thumb.querySelector('img');
      if (mainImage && img) {
        mainImage.src = img.src;
        mainImage.alt = img.alt;
      }
    });
  });

  // Contact form
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('.btn');
      const originalText = btn.textContent;
      btn.textContent = 'Message Sent!';
      btn.style.background = 'var(--color-green)';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        form.reset();
      }, 3000);
    });
  }
});
