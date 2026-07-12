# Tanish Mhatre — Portfolio

A production-grade personal portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL. For a production build:

```bash
npm run build
npm run preview
```

## Before you deploy — required assets

This project was generated in a sandboxed environment with no internet access,
so real image files and your resume PDF couldn't be downloaded automatically.
See **`public/ASSETS_NEEDED.md`** for the exact filenames and paths expected —
drop your files in and everything resolves automatically.

## Editing content

You should never need to touch a component to update your information. Every
section reads from a dedicated file in `src/data/`:

| File | Controls |
|---|---|
| `personalInfo.ts` | Name, headline, bio, philosophy, contact details, resume link |
| `navigation.ts` | Header/footer nav items |
| `socialLinks.ts` | GitHub / LinkedIn / Instagram links |
| `education.ts` | Degree(s), coursework |
| `experience.ts` | Work history, achievements, tech tags |
| `skills.ts` | Skill name, category, proficiency |
| `projects.ts` | Every project + full case-study detail (also controls category filters) |
| `certifications.ts` | Certificates, issuer, verification links |
| `achievements.ts` | Leadership / extracurricular entries |
| `blogs.ts` | Blog post previews (title, excerpt, external link) |

To **add a project**: add a new object to the `projects` array in `projects.ts`
with a unique `slug` — a detail page is generated automatically at
`/projects/<slug>`, and it appears in the projects grid and (if `featured: true`)
on the homepage.

## Architecture

```
src/
  components/
    layout/     Header, Footer, Layout, ScrollToTop, SignalTrace (scroll signature)
    sections/   Home page sections (Hero, About, Experience, Projects, ...)
    ui/         Reusable primitives (Button, Card, Badge, SectionHeading)
  data/         All editable content — see table above
  hooks/        useScrollProgress, useActiveSection, useMediaQuery
  pages/        Route-level pages (Home, ProjectsPage, ProjectDetailPage, ...)
  types/        Shared TypeScript interfaces for every data model
  utils/        cn() class-merging helper
```

## Notes on integrations

- **Contact form**: currently opens the visitor's email client with a
  pre-filled message (no backend in this build). Swap the `onSubmit` handler
  in `src/components/sections/Contact.tsx` for a real endpoint (Formspree,
  Resend, your own API) when you have one.
- **GitHub activity section**: fetches your public repos live from the GitHub
  REST API (no token required) and renders a contribution graph via the
  open-source `ghchart.rshah.org` service. Both require the site to be
  running with real internet access (they will not render in a sandboxed
  preview with no egress).
- **Deployment**: `vercel.json` is included so client-side routes
  (e.g. `/projects/tutor-ai-local-llm-teaching-assistant`) resolve correctly
  on refresh when deployed to Vercel. If you deploy elsewhere, configure an
  equivalent SPA fallback to `index.html`.

## Design system

- **Colors**: Ink `#0B1220`, Panel `#111A2B`, Line `#1E2838`, Fog `#8A96AC`,
  Paper `#EDEFF3`, Signal `#E8A33D` — one accent color, used sparingly for
  live/active states only.
- **Type**: Space Grotesk (display), IBM Plex Sans (body), IBM Plex Mono
  (data labels, stats, nav).
- **Signature element**: a scroll-linked waveform along the page edge that
  resolves from noise into a clean signal as you scroll — and a "live
  readout" panel in the hero — both literal renderings of the site owner's
  own framing: turning information into insight.
