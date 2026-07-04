# Bella Pasta — Homework 2 (React)

A responsive restaurant website for a fictional Italian trattoria, **Bella Pasta**.
This is Homework 1 rebuilt with **React** (via Vite) and styled with **Tailwind CSS**.

It includes a hero, filterable menu, image-slider gallery, about section, contact
form + Google Map, footer, and a fully working **shopping cart** (add / remove /
change quantity / total / clear / checkout).

## Tech stack
- **React 18** (component-based UI, state with hooks)
- **Vite** (dev server + build)
- **Tailwind CSS** (utility-first CSS framework)

## Run it locally
You need [Node.js](https://nodejs.org) (v18 or newer).

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the dev server -> http://localhost:5173
```

## Build for production
```bash
npm run build    # outputs a static site into the dist/ folder
npm run preview  # (optional) preview the built site locally
```

## Project structure
```
bella-pasta/
├── index.html              # Vite HTML entry (loads fonts)
├── package.json
├── vite.config.js
├── tailwind.config.js      # custom colours + fonts
├── postcss.config.js
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # holds cart state, composes the page
    ├── index.css           # Tailwind directives + a few custom styles
    ├── data/menu.js        # menu + gallery data (single source of truth)
    └── components/
        ├── Navbar.jsx      # logo, links, cart badge, hamburger, scroll-spy
        ├── Hero.jsx
        ├── MenuSection.jsx # category filters + add-to-cart cards
        ├── Gallery.jsx     # auto-rotating image slider
        ├── About.jsx
        ├── Contact.jsx     # validated form + Google Map
        ├── Footer.jsx      # social links + opening hours
        ├── CartDrawer.jsx  # slide-out cart
        ├── Toast.jsx
        └── icons.jsx       # SVG icons + image fallback helper
```

## Deploy (pick one)

### Netlify or Vercel (recommended — builds from your GitHub repo)
1. Push this folder to a GitHub repository (see below).
2. Go to netlify.com (or vercel.com) → "Add new site" → "Import from Git".
3. Build command: `npm run build`  ·  Publish directory: `dist`
4. Deploy. You get a live link.

### Netlify Drop (no Git needed)
1. Run `npm run build`.
2. Go to app.netlify.com/drop and drag the **dist** folder onto the page.

### GitHub Pages
Project Pages serve from a sub-path, so set the base in `vite.config.js`:
`export default defineConfig({ plugins:[react()], base:'/YOUR-REPO-NAME/' })`,
then build and publish the `dist` folder.

## Push to GitHub
```bash
git init
git add .
git commit -m "Homework 2: Bella Pasta in React + Tailwind"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/bella-pasta.git
git push -u origin main
```

## Submission checklist
- [ ] Hosted site link (Netlify / Vercel / GitHub Pages)
- [ ] GitHub repository link
- [ ] Paste both links directly in the submission (not inside a file)

---
*Note: the cart is stored in memory, so it resets on a full page refresh —
fine for this assignment. The food photos load from Unsplash; if any fails to
load, a warm gradient placeholder shows in its place.*
