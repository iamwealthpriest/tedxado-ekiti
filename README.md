# 🎤 TEDxAdo-Ekiti Official Website

Welcome to the source code for the **TEDxAdo-Ekiti** official website.  
This project represents the digital face of TEDxAdo-Ekiti — a hub for spreading powerful ideas and connecting changemakers in Ekiti and beyond.

> This is a private repository under active development.

---

## 🧠 Tech Stack

- **React** (via Vite)
- **Tailwind CSS v4** (CSS-first configuration)
- **Modular component structure**
- **Custom fonts** (Hupaisa & Bricolage Grotesque)

---

## 💅 Styles & Fonts

### Tailwind CSS v4
- Uses `@import` and `@layer` to declare base styles, components, and utilities
- `@theme` is used to define custom tokens

### Fonts
- **Hupaisa** (custom-loaded via `@font-face`)
  - Available in multiple weights: Thin (100), Light (300), Regular (400), Medium (500), Bold (700), Black (900)
- **Bricolage Grotesque** (used for headers)
- Font utility examples:
  - `font-hupaisa`, `font-bricolage`, `font-thin`, `font-bold`

---

## ✅ Completed Pages

| Page | Description |
|------|-------------|
| `/` | **Home** — currently in progress |
| `/about` | Tells the story of TEDxAdo-Ekiti |
| `/teams` | Showcases the organizing team (on a separate branch) |

---

## 🧱 Reusable Components

| Component | Purpose |
|----------|---------|
| `Navbar.jsx` | Main navigation |
| `Footer.jsx` | Page footer |
| `AboutTEDx.jsx` | Hero/text block for the About page |
| `Button.jsx` | Shared button style |
| `GetInvolved.jsx`, `InvolveCard.jsx` | Engagement-focused components |
| `FAQAccordion.jsx`, `FAQSection.jsx` | Interactive FAQ blocks |

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/iamwealthpriest/tedxado-ekit.git

# Install dependencies
cd tedxadoekiti
npm install

# Start the dev server
npm run dev
````

---

## 👨‍💻 Contributing

1. **Use branches** for each feature:

   ```
   git checkout -b feature/home-page
   ```
2. **Commit with context**:

   ```
   git commit -m "feat: add Get Involved section with responsive layout"
   ```
3. **Push your branch**:

   ```
   git push -u origin feature/home-page
   ```
4. **Open a pull request** into `main`
5. **Delete merged branches** to keep the repo clean

---

## 🔍 Dev Notes

* Fonts and assets are served from `/assets` and imported via relative paths.
* Team page and components live in separate branches until merged.
* Use existing font utilities (`font-hupaisa`, `font-thin`, etc.) for consistent typography.

---

## 📌 License

This codebase is maintained by the TEDxAdo-Ekiti team and is **not open source**. All rights reserved.
