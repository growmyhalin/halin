---

## ✏️ How to Edit Content

All editable content is located in   `index.html`  . Look for `✏️ EDIT:` comments throughout the file to find sections quickly.

### Hero Section
    Headline   → Located in `<h1 class="hero-title">` (~line 100). Default text highlights the shift to managing store operations entirely on a phone.
    Subtitle   → Located in `<p class="hero-subtitle">` (~line 103). Highlights AI-driven solutions built for Filipino micro-retailers.
    CTA Buttons   → Within the `.hero-ctas` block.
    Waitlist Count   → Contained in the `.social-proof-text` span, displaying active user interest (e.g., `240+ store owners`).

### Early Access Form
  Search for `id="early-access"`.
  Edit the `section-title`, `section-body`, and input fields or `placeholder` texts.
    Backend Connection  : To connect to a live database or form collector, add your handler destination to `action=""` and `method="POST"` inside the block or wrap inputs inside a standard `<form>` element.

### Feature Rows & Core Engines

| Section Block | HTML Content Identifier | Core Marketing Feature Focus |
|:---|:---|:---|
|   Row A: Orders   | `Feature A heading` / `body` | Fast Touchscreen Cart & Order Calculations to stop math errors behind the counter. |
|   Row B: Kita Analytics   | `Feature B heading` / `body` | Real-time Daily Sales Insights using minimalist cash flow and transaction tracking charts. |
|   Row C: Paubos Warnings   | `Feature C heading` / `body` | Smart Low-Stock Threshold Flags to prevent lost revenue on fast-moving items. |

### Testimonials & Social Proof
Search for `✏️ Card 1`, `✏️ Card 2`, and `✏️ Card 3` to modify localized copy:
    Aling Maria   (Pasay City, Metro Manila) — Focusing on manual logbooks, soft drinks, and high-speed checkout line management.
    Mang Juan   (Cebu City, Cebu) — Focusing on the power of clear daily sales charts to identify high-profit margin items.
    Sari-Sari Hub   (Quezon City, Metro Manila) — Showcasing weekend sales preservation via low-stock alerts.
   Note: Avatar initials can be modified inside each respective `.testimonial-avatar` tag. 

### Final CTA & Footer
    Final Conversion   → Search `id="final-cta"` to customize the closing invitation for owners looking to automate inventory.
    Footer Metadata   → Search `<footer class="page-footer">` to update the `© 2026 Halin` copyright string and the native tagline ( Gabay sa pag-asenso ng bawat tindahang Pilipino ).

---

## 🎨 How to Change Colors

All primary design tokens are managed as CSS variables in `css/styles.css` under the global `:root {}` selector.

  `--green` (`#40A040`) → Primary brand identifier for UI accents, alerts, badges, and button fills.
  `--bg` (`#FBFBF9`) → Clean, off-white workspace background for light mode.
  `--bg-alt` (`#F4F8F4`) → Soft alternate section striping to distinguish features.
  `--text-head` (`#1A241C`) → High-contrast dark charcoal hue for scannable headings.
  `--text-body` (`#4A544C`) → Balanced muted charcoal for readable body and description text.

 Note: Dark mode overrides and theme inversions are located exclusively inside `css/dark.css` mapped underneath the `body.dark {}` global modifier. 

---

## 📱 Phone Screens & Live Mockups

The high-fidelity phone application mockups are rendered using   inline HTML and responsive SVGs   inside `index.html`. They are hardcoded to display in dark mode to mirror the actual product environment, independent of the landing page's light/dark toggle state.

To modify application mockups:
1. Locate your desired phone frame via internal structural remarks (e.g., `<!-- Phone — Orders screen -->` or `<!-- Phone — Dashboard/chart screen -->`).
2. Tweak item entries (e.g.,  Central Brown Sugar ,  Lucky Me! Pancit Canton , or  Coca-Cola 1.5L ) and currency pricing values (`₱160.00`, `₱482.50`) directly inside the HTML markup nodes.
3. Chart vectors live inside custom `<polyline points="...">` arrays. Pairs represent explicit `x,y` coordinate metrics. A lower `y` numeric value plots the data path higher on the visual graph matrix.

---

## 🌙 Theme Toggle

Handled automatically by `js/theme.js`. The user's preference is saved to `localStorage` under the key `halin-theme`.

To change the default theme, edit the `initTheme()` function in `theme.js`.

---

## 🚀 Deploying

This is a plain static site — no build step or node package installations are required.

    Netlify / Vercel  : Drag and drop the root `halin-landing/` folder directly into the web app deploy deployment zones.
    GitHub Pages  : Push the repository upstream and toggle the Pages site building source setting to target your main root branch.
    Traditional cPanel Hosting  : Upload the assets, CSS, JS, and index files directly into your remote public directory root.

---

## 🔗 Nav Links

The site navigation maps directly to in-page anchor IDs: `#features`, `#pricing`, and `#early-access`. 
   Note: The `#pricing` link does not link to an active block. Insert a custom `<section id="pricing">` element inside `index.html` once subscription structures or product pricing tiers are ready to be published. 