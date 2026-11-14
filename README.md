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
src/app/
  components/           Shared and page-section components (added per task)
  about/                Route pages (added per task)
  services/
  catalogue/
  clients/
  contact/
  layout.tsx            Shared shell and metadata
  page.tsx              Home route
  globals.scss          Global tokens and layout primitives
src/data/               Typed company, service, catalogue, and client content
src/types/              Shared TypeScript types
src/lib/                Small shared utilities
public/images/           Approved, optimized brand and project imagery
docs/                    Architecture and design direction
```

All website components belong under `src/app/components/`; do not create
`src/components/` or `src/sections/`. Each component gets a kebab-case folder
containing `index.tsx` and a matching camelCase Sass Module, such as
`cp-home-hero/index.tsx` and `cpHomeHero.module.scss`. Create component folders
only when their implementation task starts. See
[docs/architecture.md](docs/architecture.md) for the full target structure.

The approved palette, typography, and design-token conventions are documented
in [docs/design-direction.md](docs/design-direction.md). Global CSS and font
implementation are pending their explicitly requested task. Put public assets
in `public/`; never store credentials or private client documents there.

See [public/images/README.md](public/images/README.md) for image-file conventions
and [docs/asset-inventory.md](docs/asset-inventory.md) for source and licence
records.
