# Davidas Design Concepts — Site Context & Architecture

> Reference document for AI agents working on this codebase.
> Last updated: March 18, 2026

---

## 1. Project Overview

**Client:** David — Davidas Design Concepts, a custom jewelry design studio in Greensboro, NC (est. 1995).
**Live URL:** https://devidasdevelopment.duckdns.org (demo on AWS EC2)
**Old site:** https://davidas.com (hosted on Register.com, largely static HTML)
**Repo:** github.com-new:sny21292/devidas-new-concept.git (branch: main)

The new site is a ground-up redesign: static HTML/CSS/JS with no framework, served by Nginx on an Ubuntu EC2 instance with Let's Encrypt SSL.

---

## 2. File Structure

```
new-site/
├── index.html              # Homepage — hero, category cards, about teaser
├── jewelry.html            # Jewelry browsing SPA (categories → grid → detail)
├── gospel-necklace.html    # Standalone product page with order form + PayPal
├── services.html           # Services grid + Visit Us CTA
├── contact.html            # Contact form + info
├── gem.html                # Gem of the Month feature article
├── videos.html             # Video library with modal player
├── about.html              # About page
├── submit-order.php        # Server-side form handler for Gospel Necklace orders
│
├── css/
│   ├── style.css           # Global styles (all pages share this)
│   └── gospel.css          # Gospel Necklace page-specific styles
│
├── js/
│   ├── main.js             # Shared JS: mobile nav, scroll reveal, video modal, contact form
│   ├── products.js         # Product data: CATEGORIES array + PRODUCTS array
│   ├── jewelry.js          # Jewelry page SPA logic (routing, views, modals)
│   └── gospel.js           # Gospel Necklace page (3D viewer, form, PayPal)
│
├── images/                 # Product images organized by category folder
│   ├── Cross%20Pendants/   # Religious cross products
│   ├── Ladies_Bracelets/   # Ladies bracelet products
│   ├── Ladies_Pendants/
│   ├── Ladies_Rings/
│   ├── Ladies%20Earrings/
│   ├── Engagement/
│   ├── Gents%20Rings/
│   ├── Gents_Pendants/
│   ├── Professional/
│   ├── Novelty/
│   └── Gospel_Necklace/    # A.png, Model.jpg
│
├── deploy/
│   ├── nginx.conf          # Reference Nginx config
│   ├── setup.sh            # EC2 initial setup script
│   └── deploy-from-mac.sh  # rsync deployment script
│
└── feature-context/        # This folder — AI context documents
```

---

## 3. Design System

### Colors (CSS variables in `:root`)
| Variable               | Hex       | Usage                        |
|------------------------|-----------|------------------------------|
| `--color-bg`           | `#0e1a04` | Page background (deep green) |
| `--color-bg-elevated`  | `#142208` | Alternate sections           |
| `--color-bg-card`      | `#1a2c0c` | Card backgrounds             |
| `--color-surface`      | `#1e3210` | Surface elements             |
| `--color-text`         | `#ffffbf` | Primary text (warm cream)    |
| `--color-text-muted`   | `#7fbf50` | Secondary text               |
| `--color-text-dim`     | `#4a7a2e` | Tertiary/labels              |
| `--color-accent`       | `#00b93d` | Accent green                 |
| `--color-border`       | `#2a4418` | Default borders              |

### Fonts
- **Display:** Cormorant Garamond (headings, brand)
- **Body:** Outfit (text, UI elements)

### Responsive Breakpoints
- `900px` — Mobile nav toggle, single-column layouts
- `600px` — Single-column grids, stacked footer

---

## 4. Jewelry Browsing System (SPA)

The jewelry page (`jewelry.html`) is a single-page app using hash-based routing. All logic is in `js/jewelry.js`, all data in `js/products.js`.

### Data Structures

**CATEGORIES** array — defines the navigation menu:
```js
{ id: "ladies", label: "Ladies", subcategories: [
    { id: "bracelets", label: "Bracelets" },
    { id: "earrings", label: "Earrings" },
    // ...
]}
```

**PRODUCTS** array — every product in the catalog:
```js
{
  style: "230-103",           // Unique ID, shown as "Style #230-103"
  name: "Dogwood Flower Cross Pendant",
  category: "religious",      // Must match a CATEGORIES[].id
  subcategory: "cross",       // Must match a subcategories[].id
  description: "...",         // Full text description
  metals: "",                 // Optional — shown in specs if non-empty
  sizes: "",                  // Optional
  karats: "",                 // Optional
  image: "images/Cross%20Pendants/117-326/AA.png",
  video: "https://ijewel.design/embedded?slug=...",  // Optional — 3D viewer URL
  formHint: "Metal Karat, Color and Arrangement"      // Optional — custom inquiry form label
}
```

### How to Add a New Product

1. Add a product image to the appropriate `images/` subfolder
2. Add an entry to the `PRODUCTS` array in `js/products.js`
3. If it belongs to a new subcategory, add the subcategory to `CATEGORIES`
4. If it needs a 3D viewer, add the `video` field with an ijewel.design embed URL
5. If it needs a custom inquiry form hint, add the `formHint` field
6. Deploy with rsync (see Section 8)

### Three Views (hash routing)

| Hash Pattern           | View              | Function          |
|------------------------|-------------------|-------------------|
| (none) or `#`          | Category menu     | `showCategories()`|
| `#ladies/bracelets`    | Product grid      | `showGrid()`      |
| `#product/230-103`     | Product detail    | `showDetail()`    |
| `#inquiry/230-103`     | Detail + modal    | Opens inquiry form|

### Special Routes
- `#religious/gospel-necklace` → redirects to `gospel-necklace.html`
- Direct hash to a single-subcategory category auto-opens the grid

### Product Detail Features
- Product image with optional "Click to View in 3D" button
- "Click For Pricing" button → opens inquiry modal
- Style number, description, optional specs (metals, sizes, karats)
- 3D Viewer opens in a fullscreen modal with an iframe to ijewel.design
- Inquiry modal dynamically sets the form hint text per product via `formHint`

---

## 5. Gospel Necklace Page

`gospel-necklace.html` is a standalone product page (not part of the SPA). It has:

- Two product images (A.png, Model.jpg)
- 3D viewer button → modal with ijewel.design iframe
- Detailed description with symbol meanings
- Order form with product dropdown (8 size/metal combos with prices)
- Price display updates dynamically on selection
- "Submit Order" → AJAX POST to `submit-order.php`
- "Pay Now" → redirects to PayPal with order details
- Mailing address fields for shipping

**Styles:** `css/gospel.css`
**JS:** `js/gospel.js`

---

## 6. Video Library

`videos.html` displays 6 video cards. Clicking any card opens a modal video player.

### Video files are hosted locally on EC2 at `/var/www/davidas/videos/`:
| File                    | Size  | Content              |
|-------------------------|-------|----------------------|
| `Cad.m4v`              | 88 MB | CAD design process   |
| `Jewelry_Repair.m4v`   | 41 MB | Repair techniques    |
| `Pearl_Restringing.m4v`| 26 MB | Pearl restringing    |
| `Engraving_Video.m4v`  | 71 MB | Engraving process    |
| `Wax_Carving.m4v`      | 67 MB | Wax carving          |
| `Digitizing.m4v`       | 14 MB | Digitizing process   |

Video paths in HTML: `data-video-src="videos/Cad.m4v"` (relative paths).

The video modal logic is in `js/main.js`. Each `.video-card` has `data-video-src` and `data-video-title` attributes. Clicking opens a `<video>` element in a modal overlay.

**Important:** Videos are NOT in the git repo — they live only on the EC2 server. The rsync deploy command uses `--exclude='videos/'` to avoid deleting them.

---

## 7. Services Page

`services.html` lists 9 service cards in a responsive grid. Key services:
- Jewelry Repair (David's expanded description)
- Jewelry Appraisals
- Engraving / Hand Engraving
- Pearl & Bead Stringing
- Custom Jewelry Designs
- CAD/CAM Design
- Jewelry Consultations
- Watch & Clock Repair

**Silver Restoration was removed** per David's request.

---

## 8. Deployment

### Server
- **EC2 instance:** `ubuntu@54.81.159.119`
- **SSH key:** `/Users/sunilkumar/Documents/pemfiles/linkdinapp.pem`
- **Web root:** `/var/www/davidas/`
- **Domain:** `devidasdevelopment.duckdns.org` (DuckDNS → EC2 public IP)
- **SSL:** Let's Encrypt via Certbot, auto-renewed

### Deploy Command (from Mac)
```bash
cd /Users/sunilkumar/Documents/Projects/CloveOde/davidas.com/site-download/new-site

rsync -avz --delete \
  --exclude='.git' \
  --exclude='deploy' \
  --exclude='videos/' \
  --exclude='feature-context/' \
  -e "ssh -i /Users/sunilkumar/Documents/pemfiles/linkdinapp.pem" \
  ./ ubuntu@54.81.159.119:/var/www/davidas/
```

### Nginx Config
- Static file serving with gzip
- SSL termination (Let's Encrypt)
- HTTP→HTTPS redirect
- Video files: 30-day cache, byte-range support
- CSS/JS/HTML: no-cache during development

### Git Workflow
```bash
cd site-download/new-site
git add -A
git commit -m "description"
git push origin main
```

---

## 9. Contact Information (for content)

- **Business:** Davidas Design Concepts
- **Address:** 220 S. Swing Rd, Unit #1, Greensboro, NC 27409
- **Phone:** (336) 790-8214
- **Toll-free:** (888) 498-7540
- **Email:** info@davidas.com
- **Established:** July 8, 1995
- **Copyright:** 2026

---

## 10. Key Conventions

1. **No build step** — all files are plain HTML/CSS/JS, no bundler or preprocessor
2. **Product data is JS-driven** — never hard-code product info into HTML; add to `PRODUCTS` array
3. **Image folders use old style numbers** — folder names like `Cross%20Pendants/117-326/` are legacy; the displayed style number comes from `products.js`
4. **Footer is duplicated** in every HTML file — changes must be applied to all 8 pages
5. **Mobile nav** uses `.nav--open` class on `<nav>` to expand to full viewport (z-index stacking fix)
6. **Modals** use `.modal-overlay` class with `z-index: 1000`, centered flex layout
7. **formHint** per product — the inquiry form label dynamically changes; default is "Metal, Karat & Color, and if you have stones or stone choice"
8. **Videos are server-only** — not in git, excluded from rsync `--delete`
9. **3D viewers** use ijewel.design embeds in iframes inside a `.modal--viewer` overlay
10. **Scroll reveal** — elements with class `reveal` animate in via IntersectionObserver; `[data-stagger]` parents animate children sequentially

---

## 11. Pending / Future Work

- **Forms:** Contact form and inquiry form currently show "Message Sent!" but don't actually email. Need PHP-FPM or a form service (Formspree, etc.) to make functional.
- **Gospel Necklace form:** `submit-order.php` exists but PHP-FPM isn't configured on EC2 yet.
- **New product inventory:** David plans to add many more products with 3D viewers over time.
- **Voice over:** David mentioned waiting on a voiceover (possibly for videos or homepage).
- **Studio photos:** David is waiting on a photographer to update site imagery.
- **Old domain migration:** Eventually the new site will replace davidas.com on Register.com hosting.
