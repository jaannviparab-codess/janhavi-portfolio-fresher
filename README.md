# Janhavi Parab — Portfolio

A personal portfolio website for Janhavi Prashant Parab — Python developer, B.Sc. IT graduate,
and AI & automation enthusiast. Built as a fresher/early-career portfolio: it showcases projects,
technical skills, education and job simulations, with no professional employment section.

## Technologies

- **React 19** — UI components
- **Vite** — dev server & build tooling
- **Plain CSS** — custom design system (CSS variables, no UI framework)
- **oxlint** — linting
- Zero runtime dependencies beyond React itself (icons and animations are hand-rolled)

## Features

- Sticky, responsive navbar with active-section highlighting and a mobile menu
- Hero, About, Technical Skills, Featured Projects, Job Simulations, Education,
  Certifications, Currently Learning, and Contact sections
- Featured project showcase for **AI Nivaran** with a live demo link and GitHub link
- Scroll-reveal animations built on `IntersectionObserver`, with full
  `prefers-reduced-motion` support
- Resume download served directly from `public/resume/`
- Fully responsive from 375px mobile up to large desktop screens
- Semantic HTML, keyboard-navigable, visible focus states, and a skip-to-content link

## Project Structure

```
src/
  components/   Reusable UI pieces (Navbar, Footer, Icons, Badge, Reveal, SectionHeading)
  sections/     One component + stylesheet per page section (Hero, About, Skills, ...)
  data/         portfolio.js — the single source of truth for all page content
  hooks/        useScrollReveal, useActiveSection
  styles/       Design tokens, base/reset styles, and animation utilities
  App.jsx       Composes the sections into the page
  main.jsx      React entry point
public/
  resume/       The downloadable resume PDF
  favicon.svg
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Starts the Vite dev server (with hot module reload) and prints a local URL to open.

## Build

```bash
npm run build
```

Produces an optimized production build in `dist/`.

```bash
npm run preview
```

Serves the production build locally to sanity-check it before deploying.

## Lint

```bash
npm run lint
```

Runs `oxlint` over the project.

## Updating Content

Almost everything on the page — name, contact details, skills, projects, job simulations,
education, certifications and "currently learning" items — lives in a single file:
[`src/data/portfolio.js`](src/data/portfolio.js). Edit the values there and every section that
uses them updates automatically.

## Replacing the Resume

1. Drop the new PDF into `public/resume/`.
2. Update `resumeUrl` and `resumeFileName` in `src/data/portfolio.js` to match the new filename.

The "Download Resume" buttons in the Hero and Contact sections read from those two fields.

## Future: GitHub

This project is not yet connected to a Git repository. When ready:

```bash
git init
git add .
git commit -m "Initial commit"
```

Then create a GitHub repository and push:

```bash
git remote add origin <your-repo-url>
git push -u origin main
```

## Future: Deployment (Vercel)

This is a static Vite build, so it deploys to Vercel with zero configuration:

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy.
