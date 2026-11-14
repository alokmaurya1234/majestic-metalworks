# Architecture

## Stack

- Next.js App Router for routes, metadata, and server rendering.
- TypeScript for application and content types.
- Sass Modules for component-scoped styling; `src/app/globals.scss` owns
  shared CSS custom properties and global layout primitives.
- Local TypeScript data files for the initial portfolio content. No backend or
  CMS is required for the current static-site scope.

## Layout rules

- Use `.container` for the standard content width, `.container--wide` for
  wider grids, and `.container-fluid` for full-bleed sections with shared
  gutters.
- Use `.section` as the default vertical section spacing. Override only when
  the design requires it.
- Create a section component when it has a meaningful visual boundary,
  independent content, reuse, or behavior. Do not split every heading, label,
  or decorative element into a component.
- Keep style rules local to the component module. Add global selectors only
  when they define site-wide behavior or tokens.

## Images and content

- Place approved public images under `public/images/` and organize by use
  (such as `projects/`, `products/`, and `facility/`).
- Use descriptive filenames, consistent image crops, and useful alt text.
- Keep repeated project or product entries in typed modules under `src/data/`.
- Confirm that the client owns or has permission to use each image before
  publishing it.

## Environment variables

There are no runtime environment variables in the initial static site. Add a
variable only when a real integration requires it, document a safe example in
`.env.example`, and never commit a populated `.env.local` file or secret.
