# Halin Landing Page

Marketing landing page for **Halin** — smart inventory and sales tracking for Philippine MSMEs (Micro, Small, and Medium Enterprises).

---

## 📁 Project Structure

```
halin-landing/
  index.html        ← All page sections and content
  favicon.ico       ← Browser tab icon (H + trend line mark)
  css/
    styles.css      ← Layout, components, light mode tokens
    dark.css        ← Dark mode overrides only
  js/
    theme.js        ← Theme toggle, hamburger menu, scroll-spy
  assets/
    logo.svg        ← Halin SVG logo (theme-aware via CSS vars)
  README.md         ← This file
```

---

## 🗂️ Page Sections

| # | Section ID | Description |
|---|-----------|-------------|
| Nav | — | Sticky top nav with logo, links, theme toggle, CTA |
| 1 | `#home` | Hero — headline, subtitle, earnings preview phone |
| 2 | `#early-access` | Waitlist signup form |
| 3 | `#features` | 3 feature rows (Orders, Sales Analytics, Low-Stock) |
| 4 | `#testimonials` | 3 customer story cards |
| 5 | `#final-cta` | Final signup strip |
| — | Footer | Copyright and tagline |

---

## ✏️ How to Edit Content

All content lives in **`index.html`**. Find sections by their comment headers (`<!-- SECTION 1: HERO -->` etc.).

### Navigation links
```html
<div class="nav-links">
  <a href="#home">Home</a>
  <a href="#early-access">Early Access</a>
  <a href="#features">Features</a>
  <a href="#testimonials">Stories</a>
  <a href="#final-cta">Start Your Journey</a>
</div>
```
Edit the link text or `href` values to match your section IDs.

### Hero (Section 1 — `#home`)
- **Headline** → `<h1 class="hero-title">`
- **Subtitle** → `<p class="hero-subtitle">`
- **Primary CTA** → `<a class="btn-primary">Launch Your Workspace</a>`
- **Secondary CTA** → `<a class="btn-ghost">Watch Demo</a>`
- **Waitlist count** → `<span class="social-proof-text"><strong>240+ store owners</strong>...`
- **Phone screen numbers** (earnings, transactions, items sold) → inside `ph-hero-value`, `ph-stat-value` elements inside the hero phone block

### Early Access Form (Section 2 — `#early-access`)
- Edit `section-title`, `section-body`, and `placeholder` text on the two inputs
- To connect to a real backend, wrap the inputs in a `<form action="YOUR_URL" method="POST">` tag

### Feature Rows (Section 3 — `#features`)

**Row A — Instant Orders & Cart**
- Tag label → `<div class="feature-tag">Instant Orders & Cart</div>`
- Heading → `<h2 class="feature-title">Fast Touchscreen Cart...</h2>`
- Body → `<p class="feature-body">The single most important engine...`
- Phone shows: Orders screen with cart items (Central Brown Sugar, Coca-Cola, Lucky Me), subtotal, discount, Amount Due, Discount + Checkout buttons

**Row B — Sales Analytics**
- Tag label → `<div class="feature-tag">Sales Analytics</div>`
- Heading → `<h2 class="feature-title">Real-time Daily Sales Tracking</h2>`
- Body → `<p class="feature-body">Because every transaction feeds...`
- Phone shows: Dashboard with earnings overview line chart (Sun–Sat), recent transactions list

**Row C — Inventory Low-Stock Alert**
- Tag label → `<div class="feature-tag">Inventory Low-Stock Alert</div>`
- Heading → `<h2 class="feature-title">Smart Inventory Low-Stock Detector</h2>`
- Body → `<p class="feature-body">Set a custom minimum count...`
- Phone shows: Products list with low-stock warnings (⚠) on Central Brown Sugar, Tide Detergent, Champion Detergent

### Testimonials (Section 4 — `#testimonials`)
Three cards. Each has:
```html
<div class="testimonial-card">
  <div class="testimonial-stars">★★★★★</div>
  <p class="testimonial-quote">"Quote text here."</p>
  <div class="testimonial-author">
    <div class="testimonial-avatar">XX</div>  ← initials
    <div>
      <div class="testimonial-name">Name</div>
      <div class="testimonial-location">City, Region</div>
    </div>
  </div>
</div>
```
Current authors: Aling Maria (Pasay), Mang Juan (Cebu), Sari-Sari Hub (QC).

### Final CTA (Section 5 — `#final-cta`)
- Heading → `<h2 class="section-title">Join hundreds of store owners...`
- Body → `<p class="section-body">Ditch the paper listahan...`
- Button → `<button class="btn-primary">Sign up for Early Access</button>`

### Footer
```html
<footer class="page-footer">
  <span>© 2026 Halin. Built for Philippine MSMEs...</span>
  <span class="page-footer-tagline">Gabay sa pag-asenso...</span>
</footer>
```

---

## 🎨 How to Change Colors

All color tokens are in `css/styles.css` under `:root {}`.

| Token | Default | Used for |
|-------|---------|----------|
| `--green` | `#40A040` | Buttons, accents, logo trend line, links |
| `--bg` | `#FBFBF9` | Page background (light mode) |
| `--bg-alt` | `#F4F8F4` | Alternate section background |
| `--bg-card` | `#FFFFFF` | Cards, inputs |
| `--text-head` | `#1A241C` | Headings |
| `--text-body` | `#4A544C` | Body copy |
| `--text-muted` | `#94A3B8` | Captions, placeholders |
| `--border` | `#E2E8F0` | Dividers, input borders |

Dark mode overrides are in `css/dark.css` under `body.dark {}`.

**Phone screen colors are intentionally fixed** — the app UI always renders dark regardless of the landing page theme.

---

## 🌙 Theme Toggle

`js/theme.js` handles:
- Clicking the toggle button adds/removes `body.dark`
- Preference saved to `localStorage` key `halin-theme`
- Hamburger open/close for mobile drawer
- Scroll-spy that highlights the active nav link

Default theme on first visit: **light**. To change to dark by default, edit `initTheme()` in `theme.js`.

---

## 📱 Phone Screens

The three feature phone mockups are inline HTML/SVG — no image files. They always render dark (matching the real Halin app). To update content:

- **Orders screen** → find `<!-- Phone — Orders screen -->` in `index.html`, edit product names and amounts inside `.ph-order-item` blocks
- **Sales Analytics screen** → find `<!-- Phone — Dashboard/chart screen -->`, edit chart `<polyline points="...">` (lower y = higher on chart) and stat values
- **Products/Inventory screen** → find `<!-- Phone — Products / inventory screen -->`, edit `.ph-product` rows and `.ph-stock` / `.ph-stock-low` badges

---

## 🚀 Deploying

Static site — no build step needed.

- **Netlify / Vercel** → drag the `halin-landing/` folder into the deploy zone
- **GitHub Pages** → push to repo, set Pages source to root
- **cPanel / shared hosting** → upload all files keeping the folder structure intact

Make sure `favicon.ico` is in the root of the deployed folder so browsers pick it up automatically.

---

## 🔗 Adding a Pricing Section

The nav has a `#pricing` link ready. To activate it:
1. Add `<section id="pricing" class="section">...</section>` between `#features` and `#testimonials` in `index.html`
2. Add pricing styles to `css/styles.css`
