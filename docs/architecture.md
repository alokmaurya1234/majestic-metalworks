# Architecture

## Stack and current status

- Next.js App Router, React Server Components by default, and strict TypeScript.
- Sass Modules for component styles; `src/app/globals.scss` is the shared
  source for global CSS tokens and layout primitives.
- The initial site is content-led and can use typed local data. Do not add a
  CMS, database, or other service unless the requirements call for one and the
  project owner approves it.
- The current foundation has the root route and global layout. The route and
  component directories below are the approved target structure; create each
  page or component only when its implementation task starts.

## Target route structure

```text
src/app/
  page.tsx                         # Home: /
  about/page.tsx                   # /about
  services/page.tsx                # /services
  catalogue/page.tsx               # /catalogue
  catalogue/[category]/page.tsx    # /catalogue/:category
  catalogue/[category]/[slug]/page.tsx
                                   # /catalogue/:category/:slug
  clients/page.tsx                 # /clients
  contact/page.tsx                 # /contact
  layout.tsx                       # Shared site shell and metadata defaults
  globals.scss                     # Global tokens, reset, and shared classes
```

The root layout imports the shared header and footer. Each route page composes
the sections required for that page. Dynamic catalogue routes should resolve
their content from typed catalogue data rather than duplicated page markup.

## Component structure

All website components live under `src/app/components/`. Do not use a separate
`src/components/` or `src/sections/` directory.

```text
src/app/components/
  cp-header/
    index.tsx
    cpHeader.module.scss
  cp-footer/
    index.tsx
    cpFooter.module.scss
  cp-home-hero/
    index.tsx
    cpHomeHero.module.scss
  cp-home-about/
    index.tsx
    cpHomeAbout.module.scss
  cp-home-services/
    index.tsx
    cpHomeServices.module.scss
  cp-home-catalogue/
    index.tsx
    cpHomeCatalogue.module.scss
  cp-home-clients/
    index.tsx
    cpHomeClients.module.scss
  cp-home-contact-cta/
    index.tsx
    cpHomeContactCta.module.scss
```

This is a naming and placement example, not a request to create these folders
now. Create each independent component folder only when its task starts. Each
folder contains its `index.tsx` and matching camelCase `.module.scss` file.
Use kebab-case for folder names. Pages import their own sections; the root
layout owns shared header and footer composition.

Create additional components only for meaningful content, visual, reuse, or
interaction boundaries. Avoid splitting individual labels or decorative
elements into components. Prefer shared tokens and concise module styles over
duplicated SCSS.

## Content, types, and utilities

```text
src/
  data/
    company-content.ts
    services.ts
    catalogue.ts
    clients.ts
  types/
  lib/
```

Keep repeated company, service, catalogue, and client content in typed data
modules, separate from presentation. Add shared types under `src/types/` when
they are used across routes or data modules. Keep `src/lib/` limited to small,
reused utilities. Do not invent company facts; validate business copy against
the official site audit or with the project owner.

## Images and assets

```text
public/images/
  branding/
  home/
  about/
  services/
  catalogue/
  clients/
  workshop/
```

These folders are created as approved assets are added. Prefer locally stored,
optimized images with descriptive lowercase filenames. Use `next/image`,
meaningful alt text, and consistent crops. Record source URLs and licence
information in [the asset inventory](asset-inventory.md). Use stock images only for
inspiration or category presentation; never label them as completed company
projects.

## Global layout and styles

- The root layout loads Space Grotesk for display text and Manrope for body text
  through `next/font/google`; both are exposed to CSS as global font variables
  with sans-serif fallback stacks.
- `src/app/globals.scss` defines the approved brand and semantic colour tokens,
  responsive type scale, shared spacing scale, base/accessibility styles, and
  container primitives.
- `.container` is centered with a maximum width of `1280px`.
- `.container--wide` is centered with a maximum width of `1440px`.
- `.container-fluid` spans the viewport and uses the shared page gutter.
- `.section` uses the shared `--space-section` vertical spacing token.
- Backgrounds can reach the viewport edge; content aligns to the appropriate
  shared container.
- Shared Sass responsive breakpoints are 640px (large mobile), 768px (tablet),
  1024px (laptop), and 1280px (desktop).
- Keep design tokens and global resets in `src/app/globals.scss`; keep
  component-specific styling in Sass Modules.
- See [design-direction.md](design-direction.md) for token names and visual
  standards.

## Environment configuration

The current static foundation needs no runtime environment variables. Add
variables only for an approved integration, document safe placeholders in
`.env.example`, and keep populated `.env.local` and other secret files out of
Git.
