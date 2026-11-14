# Page sections

Group a section in a kebab-case folder and keep its TypeScript and Sass Module
together. Example:

```text
sections/
  project-highlights/
    index.tsx
    project-highlights.module.scss
```

Only create a component when it has a clear visual, content, reuse, or behavior
boundary. Share repeated presentation patterns through a small component or
shared token rather than copying full blocks of SCSS.
