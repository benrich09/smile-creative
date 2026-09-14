# Smile Creative — Creative Technology Website

Modern company website for **Smile Creative**, built with React 18, TypeScript, Vite, Tailwind CSS v4, Framer Motion, and React Router.

**Tagline:** Connect · Engage · Grow

## Services

- Software Development
- Bulk SMS Services
- Film & Media Production

## Color Palette

| Color | HEX | Usage |
|-------|-----|--------|
| Deep Navy | `#18273e` | Primary background, text, headers |
| Pure White | `#ffffff` | Content areas |
| Soft Gold | `#d4c08a` | Accents, CTAs, highlights |

## Tech Stack

- **React 18** + **TypeScript** + **Vite 6**
- **Tailwind CSS v4** (via `@tailwindcss/vite` plugin)
- **React Router v6**
- **Framer Motion**
- **Lucide React**

## Getting Started

```bash
# Clean install (important if you had a previous broken install)
rm -rf node_modules package-lock.json

npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Work.tsx
│   ├── Team.tsx
│   └── Contact.tsx
├── App.tsx
├── main.tsx
└── index.css          # Tailwind v4 + theme tokens
```

## Notes

- Contact form is demo-only. Connect to Formspree, Netlify Forms, or your API for production.
- Team members use initial avatars — replace with real photos as needed.
- Portfolio items use gradient placeholders — swap with real project imagery when available.
- Social and contact details are placeholders; update them for live use.

---

Built for Smile Creative.
