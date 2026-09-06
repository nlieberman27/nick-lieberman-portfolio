# Nick Lieberman — Portfolio

A one-page recruiting portfolio built with React, Vite, and TypeScript. The site presents Nick's work through an editorial, evidence-led hierarchy: Loven is the flagship case study, followed by concise studies spanning entrepreneurship, property operations, market testing, professional construction work, and community leadership.

## Local development

```bash
npm install
npm run dev
```

Vite prints the local URL, normally `http://localhost:5173`. To make the development server available to a Replit preview or another device, run:

```bash
npm run dev -- --host 0.0.0.0
```

## Checks and production build

```bash
npm run lint
npm run typecheck
npm run build
npm run preview -- --host 0.0.0.0
```

The preview command normally serves the production build at `http://localhost:4173`.

## Project structure

```text
src/
  components/       Page sections and reusable project presentation
  content/portfolio.ts  Typed source of truth for public copy, links, and facts
  App.tsx            One-page composition
  styles.css         Design tokens, responsive layout, and interaction styles
public/
  favicon.svg        Code-native NL favicon
  social-preview.svg Restrained Open Graph preview artwork
```

All facts, project descriptions, external links, optional contact details, and future image paths should be edited in `src/content/portfolio.ts`. Optional navigation and contact actions render only when their values are configured.

## Adding real project assets

Place approved, privacy-reviewed images in `public/projects/`, then add their paths and accurate alt text to the relevant project entry in `src/content/portfolio.ts`. Suggested filenames:

- `public/projects/loven-overview.webp`
- `public/projects/marin-emergency-kits.webp`
- `public/projects/paradise-del-mar.webp`
- `public/projects/lake-street-labs.webp`
- `public/projects/gci-project-work.webp`
- `public/projects/cira-health-drive.webp`

The current release intentionally uses typography-led project covers instead of fabricated screenshots or placeholder image boxes.

## Inputs still needed before a later launch iteration

- Approved public email address
- Verified LinkedIn URL
- Real resume file or verified resume URL
- Approved real project imagery with alt-text context
- Final employment and project dates
- Target-job tailoring, if desired

These missing inputs are not exposed on the public page.
