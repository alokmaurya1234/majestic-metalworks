# Design direction

## Approved creative direction

**Premium Architectural Metalworks — Minimal Industrial Editorial.** The site should feel premium, modern, minimal, architectural, professional, trustworthy, and visually strong. Combine the restraint of an architectural studio with the material strength and craft of a metal fabrication company. Avoid generic corporate layouts, clutter, excessive animation, and decorative effects that do not help visitors understand the work.

The owner-approved visual reference is the source for final composition and image selection. Preserve its emphasis on large architectural photography and stainless-steel railing imagery. Do not start implementing sections until the owner requests them.

## Colour palette

| Token | Value | Use |
| --- | --- | --- |
| `--color-charcoal` | `#111111` | Primary dark backgrounds and text |
| `--color-ivory` | `#F4F3EF` | Warm light backgrounds |
| `--color-white` | `#FFFFFF` | White surfaces and inverse text |
| `--color-orange` | `#F36B24` | Primary actions, active states, selective highlights |

Semantic tokens should map to this palette: `--color-text-primary` to charcoal, `--color-text-secondary` to `#5F5E59`, `--color-text-inverse` to white, `--color-border-light` to `#E3E1DB`, `--color-border-dark` to `#3C3C3C`, `--color-surface-light` to ivory, and `--color-surface-dark` to charcoal.

Use orange selectively for calls to action, important highlights, active navigation, and interactive states. Alternate light and dark surfaces; do not make every section orange or charcoal. Check text and focus contrast. Use charcoal text on orange buttons unless a contrast check supports another combination.

## Typography

- Display and headings: **Space Grotesk**.
- Body, navigation, labels, buttons, forms, and descriptions: **Manrope**.
- When implementation is approved, load fonts with `next/font/google` in the root layout and use suitable system sans-serif fallbacks. Load only used weights: 400, 500, 600, and 700.
- Maintain a consistent heading hierarchy, restrained letter spacing, and avoid unnecessary uppercase text.
- Suggested responsive sizes: `--font-size-display: clamp(3.5rem, 7vw, 6.5rem)`, `--font-size-h1: clamp(2.75rem, 5.5vw, 5rem)`, `--font-size-h2: clamp(2.25rem, 4vw, 3.5rem)`, `--font-size-h3: clamp(1.5rem, 2.5vw, 2rem)`, `--font-size-body: 1rem`, and `--font-size-small: 0.875rem`.
- Use heading line-height near 1.1, body line-height near 1.6, and comfortable measure for long paragraphs. Tune values against the approved reference without creating one-off values for each component.

## Global design tokens

`src/app/globals.scss` is the single CSS-token source. Components consume shared tokens with `var()` rather than defining local brand colours, page widths, or section spacing.

- Colour tokens: the four brand values above plus semantic text, border, and surface mappings.
- Typography tokens: `--font-display`, `--font-body`, display/H1/H2/H3/body/small sizes, `--font-weight-regular`, `--font-weight-medium`, `--font-weight-semibold`, `--font-weight-bold`, `--line-height-heading`, `--line-height-body`, and restrained letter-spacing tokens.
- Spacing scale: `--space-1` 4px, `--space-2` 8px, `--space-3` 12px, `--space-4` 16px, `--space-6` 24px, `--space-8` 32px, `--space-12` 48px, `--space-16` 64px, `--space-20` 80px, and `--space-24` 96px for section rhythm, gaps, margins, and padding.
- Layout tokens: `--container-max: 1280px`, `--container-wide: 1440px`, responsive `--page-gutter`, and responsive `--section-space-y`.
- Finishing tokens: `--radius-sm` 4px, `--radius-card` 8px, `--border-width` 1px, a subtle shadow token, short transition tokens, and `--z-header`, `--z-mobile-nav`, and `--z-skip-link` only where stacking is needed.
- Avoid tokens without repeated use. Keep responsive spacing and heading sizes fluid where appropriate.

## Containers and sections

- `.container`: centered, maximum content width 1280px.
- `.container--wide`: centered, maximum content width 1440px; use for wide product grids and image compositions.
- `.container-fluid`: viewport-width with the shared responsive horizontal gutter.
- `.section`: uses the shared vertical section-spacing token.
- Full-bleed backgrounds may extend to the viewport edge; content remains aligned to a shared container. Avoid arbitrary max-widths and repeated horizontal padding in component modules.

## Shared components

### Header

- White or warm-ivory background, dark navigation text, subtle bottom border, and orange contact call to action.
- Preserve the original company logo, colours, proportions, and clear space. Keep it on a suitable light background; never redraw, recolour, distort, or regenerate it. Place it top-right as specified in the approved direction.
- Use sticky navigation. On small screens, provide an accessible hamburger button and keyboard-operable navigation.

### Footer

- Charcoal background, white typography, orange interactive highlights, and the original logo in a suitable light container.
- Include a concise company introduction, navigation, verified service/product links, and verified contact details. Keep one shared footer in the root layout.

### Hero and section composition

- Lead with a large architectural or metalwork photograph and a clear, concise headline. Preserve generous negative space and the approved reference's editorial typography.
- Use a restrained orange primary action and maintain text contrast over imagery. Alternate warm-light and charcoal sections for rhythm.
- Keep content within the shared container system; let major photography carry the visual emphasis.

### Product cards

- Keep image ratios consistent within a grid; start with a 4:3 crop for catalogue cards unless the composition requires a documented exception.
- Keep the material, installation, and product visible. Use concise titles, useful descriptions, and clear navigation cues.
- Reuse global spacing, typography, border, and focus tokens; keep hover effects subtle.

## Photography and asset handling

Target approximately 60–70% curated architectural/product stock photography and 30–40% original company imagery across the site. This is a direction, not a quota per page.

Prioritize original company photos for completed work, the workshop, infrastructure, client projects, and authentic products. Licensed stock may support hero imagery, architectural contexts, category presentation, and interior inspiration. Preferred subjects include luxury-home stainless railings, glass balconies, architectural sliding gates, brushed metalwork details, and modern glass-and-metal installations.

Never present stock imagery as a completed Majestic Metalworks project. Prefer optimized local assets in `public/images/`; avoid unstable third-party image URLs. Record each asset's filename, source URL, creator/provider, licence terms, and original/stock status in [the asset inventory](asset-inventory.md). Confirm usage rights before publishing.

## Responsive layout and interaction

- Use shared breakpoints throughout: 640px, 768px, 1024px, and 1280px. Keep Sass media-query thresholds consistent.
- Start with a single-column mobile layout, then add columns and more complex image compositions as space permits. Keep navigation, typography, cards, and gutters readable.
- Prevent horizontal overflow. Crop images intentionally and allow text to wrap naturally.
- Use semantic HTML, visible `:focus-visible` styles, accessible names, keyboard-operable controls, and reduced-motion support.
- Prefer simple CSS transitions. Do not add Framer Motion, GSAP, excessive parallax, or unnecessary client JavaScript without owner approval.

## Business information and SEO

Use the official company website as the primary business-information source and confirm content against the original website audit. Product and service categories in project notes are leads to verify, not a substitute for that audit. Do not invent specifications, certifications, company dates, manufacturing capacity, employee counts, client relationships, or project achievements. Ask the owner when facts are missing.

Use descriptive page titles and metadata, one clear page-level heading, and a logical heading hierarchy. Use meaningful alt text for informative imagery and empty alt text for purely decorative imagery.

## Current implementation boundary

This document records the approved direction; it does not authorize new routes, homepage sections, or components. Implement global tokens and font integration only when the owner explicitly starts that task. Implement individual sections one at a time after instruction.
