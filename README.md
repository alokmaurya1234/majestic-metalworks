# Majestic Metalworks

Company portfolio website built with Next.js App Router, TypeScript, and Sass Modules.

## Requirements

- Node.js 20.9 or newer
- npm

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Project commands

```bash
npm run lint       # ESLint
npm run typecheck  # TypeScript check
npm run build      # Production build
npm start          # Serve the production build
```

## Structure

```text
src/
  app/                 Routes, root layout, metadata, and global styles
  components/
    layout/            Site-wide shell components (header, footer, container)
    sections/          Page sections grouped by feature
  data/                Typed, local content such as projects and products
  lib/                 Small shared utilities and constants
public/
  images/              Optimized, licensed client and project photography
docs/                  Architecture and content decisions
```

Use a route folder for each URL under `src/app`. Keep page-specific sections in
`src/components/sections/<section-name>/`, with `index.tsx` and
`<section-name>.module.scss` together. Keep shared design tokens in
`src/app/globals.scss`; component-specific visual rules belong in that
component's Sass Module.

## Brand setup

The starter palette and spacing tokens live in `src/app/globals.scss`. They are
working defaults and should be reviewed against the client's logo, brand colors,
and chosen typefaces before visual design is finalized. Put public assets in
`public/`; do not store credentials or private client documents there.

See [docs/architecture.md](docs/architecture.md) and
[public/images/README.md](public/images/README.md) for conventions.
