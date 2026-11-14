# Majestic Metalworks project instructions

## Scope and approval

- The project owner controls design approval, company information, imagery, and
  implementation scope. Work only on the requested task.
- Do not begin website implementation until the owner asks for it. Until then,
  maintain the foundation and documentation only. Build one requested section
  or task at a time, and wait for the next instruction before proceeding.
- Before each task, inspect the current Git status and branch, confirm there
  are no unrelated changes, and review the relevant architecture and files.
  Preserve all existing work; do not reset, overwrite, or delete history.
- Ask before adding dependencies, changing production design beyond the
  approved direction, or expanding the task scope.

## Git and deployment workflow

- `main` is the production branch. Never develop features directly on `main`.
- Create a descriptive feature or task branch for each independent task, such
  as `feature/home-hero` or `docs/project-foundation`.
- After a task, inspect the diff and remove unused code and imports. Run
  `npm run lint` and `npx tsc --noEmit`; run `npm run build` when appropriate.
  Report changed files and the result of each check.
- Create one small, meaningful Conventional Commit on the feature branch after
  checks pass. Examples: `feat: add homepage hero`, `fix: adjust mobile menu`,
  `docs: document design direction`.
- Never commit `node_modules`, `.next`, `.env.local`, credentials, API keys,
  tokens, private keys, or generated build artifacts. Keep `.env.example`
  tracked and free of secrets. Check staged files before committing.
- Push the verified feature branch to `origin` to trigger a Vercel Preview.
  Open or update a pull request targeting `main` when GitHub access is
  available. Report the local changes, checks, Preview URL when available,
  and pull request URL. Do not merge until the project owner approves.
- `main` is connected to Vercel Production. Do not push feature work directly
  to `main`, force-push, overwrite remote history, or manually deploy
  production. After an approved merge, confirm the production deployment.
- If GitHub or Vercel access is unavailable, report the exact manual action
  required. Never ask the owner to share passwords or personal access tokens in
  chat.

## Required architecture

- Use Next.js App Router, React Server Components by default, and strict
  TypeScript. Use client components only for interactions that need browser
  state or event handling.
- All website components belong under `src/app/components/`. Do not create
  `src/components/` or `src/sections/`.
- Give each component its own kebab-case folder with exactly its `index.tsx`
  entry and a matching camelCase Sass Module. For example:

  ```text
  src/app/components/cp-home-hero/
    index.tsx
    cpHomeHero.module.scss
  ```

- Create component folders only when their implementation task starts. Keep
  shared header and footer components in `src/app/components/` and include
  them through the root `src/app/layout.tsx`.
- Pages use `page.tsx` in their App Router route directories. Keep reusable
  business content in typed modules under `src/data/`; keep shared types in
  `src/types/` and small shared helpers in `src/lib/`.
- Keep component styles in Sass Modules. Put shared design tokens, reset,
  typography defaults, accessibility defaults, and container primitives in
  `src/app/globals.scss`.
- Use the shared `.container`, `.container--wide`, `.container-fluid`, and
  `.section` classes. Do not repeat arbitrary widths, page gutters, or section
  spacing in component styles.

## Design direction and content

- Follow **Premium Architectural Metalworks — Minimal Industrial Editorial**:
  premium, modern, minimal, architectural, professional, trustworthy, and
  visually strong. Avoid generic corporate templates, clutter, excessive
  animation, and unnecessary effects.
- Use the approved palette: charcoal `#111111`, warm ivory `#F4F3EF`, white
  `#FFFFFF`, and burnt orange `#F36B24`. Use orange selectively and balance
  light and dark sections.
- Use Space Grotesk for display and headings and Manrope for body text, with
  suitable sans-serif fallbacks. Integrate through `next/font/google` in the
  root layout when the owner approves implementation.
- Use original company assets for authentic company work and licensed stock
  photography for architectural inspiration. Never present stock photography
  as a completed Majestic Metalworks project. Prefer local assets under
  `public/images/` and keep source URLs and licence notes in the asset
  inventory.
- Use the official company website and an approved website audit to verify
  services, product categories, and business copy. Do not invent
  specifications, certifications, dates, capacity, employee counts, clients,
  or project achievements. Ask the owner when information is missing.
- Follow semantic HTML, keyboard access, visible focus, reduced-motion
  preferences, useful alt text, responsive layouts, optimized local images, and
  page-specific metadata. Do not add unnecessary libraries or suppress lint
  or TypeScript errors to pass checks.

## Documentation

- Keep `docs/architecture.md` aligned with the actual and planned route,
  component, and data structure. Clearly distinguish future folders from
  implemented files.
- Keep `docs/design-direction.md` aligned with the approved palette,
  typography, shared components, photography, responsive, and interaction
  requirements.
- Preserve unrelated documentation when updating project guidance.
