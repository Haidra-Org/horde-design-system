# Contributing to Horde Design System

## Adding or Modifying Tokens

1. Tokens live in `tokens/` — one file per concern (colors, glass, spacing).
2. All tokens use Tailwind v4 `@theme` blocks for automatic utility generation.
3. Every token must work in both light and dark mode. Glass tokens have explicit `-dark-*` counterparts.
4. Token names must be **neutral** — no project-specific semantics. Projects define aliases in their local styles.
5. After changes, verify both consuming projects build successfully.

## Adding or Modifying Primitives

1. Primitives live in `primitives/` — one file per component family.
2. All primitives use `@layer components` and reference only shared tokens.
3. Every class must include full dark mode support (`.dark` parent selector).
4. A class belongs here only if it is used in both consuming projects.
5. Project-specific variants stay in each project's local CSS.

## Testing Changes

```bash
# In horde-model-reference-frontend
cd src/shared/design-system && git checkout <your-branch>
cd ../.. && npm start  # verify dev server + visual check
npm test               # verify tests

# In AiHordeFrontpage
cd src/shared/design-system && git checkout <your-branch>
cd ../.. && npm start
npm test
```

## Barrel Imports

When adding a new file, add its `@import` to the corresponding `index.css` barrel.
