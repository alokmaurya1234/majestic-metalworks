# Repository working agreement

## Approval and scope

- Before implementation, inspect the current Git status and branch, confirm
  there are no unrelated changes, and understand the relevant components and
  architecture. Briefly state the intended scope, then proceed with the
  user's requested task.
- Make changes only within the scope approved by the user. Ask before adding a
  dependency, changing project-wide configuration, or expanding the scope.
- Preserve existing user changes. Never reset, overwrite, or delete existing
  Git history or remote repositories.
- Do not add tests unless the user asks. After implementation, run ESLint and
  TypeScript checks, and run a production build when appropriate. Inspect the
  diff, remove unused code and imports, and report changed files and check
  results.

## Git and deployment workflow

- `main` is the production branch. Never develop a feature directly on `main`.
- Create one descriptive branch for each independent section or task, for
  example `feature/home-hero` or `fix/mobile-navigation`.
- Keep commits small and meaningful. Use Conventional Commit prefixes such as
  `feat:`, `fix:`, `style:`, `docs:`, and `chore:`. Do not create empty or
  meaningless commits.
- Commit only verified changes on the feature branch. Never commit
  `node_modules`, `.next`, `.env.local`, credentials, API keys, tokens, or
  generated build artifacts. Keep `.env.example` safe and tracked.
- After checks pass, push the feature branch to generate its Vercel Preview
  deployment. This feature-branch preview push is part of the user's requested
  workflow. Never push unverified work or push feature work directly to
  `main`.
- Show the local changes and provide the Preview URL when available. Wait for
  the user's approval before creating or updating a pull request. Merge only
  after explicit approval.
- `main` deploys to Vercel Production. Confirm the production deployment after
  an approved merge. Do not manually deploy production unless explicitly
  requested.
- Do not start another section or task until the user gives the next
  instruction. If GitHub or Vercel access is unavailable, report the exact
  manual step needed; never ask for passwords or personal access tokens in
  chat.

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
