# Repository working agreement

## Approval and scope

- Before implementation, inspect the relevant files and present a short plan
  listing intended changes. Wait for the user's approval before starting a new
  implementation phase.
- Make changes only within the scope approved by the user. Ask before adding a
  dependency, changing project-wide configuration, or expanding the scope.
- Never create or change a GitHub repository, commit, push, open a pull request,
  connect an external service, or deploy without the user's explicit approval.
- Do not add tests or run tests unless the user asks. Report any checks that
  were run and their results.
- After an approved phase, summarize changed files, decisions, and outstanding
  items. Show the diff before asking for approval to publish it.

## Project conventions

- Use Next.js App Router, TypeScript, and server components by default. Add
  client components only for interactions that need browser state or events.
- Keep routes in `src/app`; keep reusable site layout under
  `src/components/layout`; keep page sections under
  `src/components/sections/<kebab-case-name>/`.
- A section folder uses `index.tsx` with a sibling
  `<kebab-case-name>.module.scss`. Use Sass Modules for component styles.
- Reuse global tokens and `.container`, `.container--wide`, `.container-fluid`,
  and `.section` from `src/app/globals.scss`. Avoid repeating layout values in
  section styles.
- Store static assets in `public/` with descriptive, lowercase filenames. Use
  `next/image` for content imagery and provide useful alt text.
- Keep client-editable hard-coded content in typed modules under `src/data`
  when it is shared or list-shaped. Avoid introducing a CMS or database until
  the requirements call for one.
- Prefer small components and shared styles over duplicated markup or
  one-off global selectors. Keep global CSS limited to resets, tokens,
  typography, accessibility defaults, and shared layout primitives.
- Do not add dependencies for a one-off helper; use the platform APIs where
  practical.
