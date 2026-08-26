# Design System Reference

Shared design language for [Haidra-Org](https://github.com/Haidra-Org) frontends. Covers design tokens, surface primitives, the color system, and form structures. For the CSS class catalog, see [component-patterns.md](component-patterns.md).

---

## Two families, two dark-mode conventions

The system carries two visual families side by side. Everything below the next heading describes the glass family; the HD family is described in [its own section](#the-hd-family) and in the README's HD Token and Primitive references.

They differ most in how dark mode is reached, and mixing the two conventions is the mistake to watch for:

- **Glass** stores light and dark as separate `@theme` names (`--color-glass-surface-*` and `--color-glass-surface-dark-*`), and a rule picks between them with a `.dark` override of itself. A glass component without its paired `.dark` rules is unfinished.
- **HD** stores one name per role in `tokens/semantic.css`, declared on `:root` and redeclared under `.dark`. A rule reads the name once and is correct in both themes. **Never write a `.dark .hd-*` rule**: it duplicates a decision the token already made, and the two copies drift.

A second difference matters when reaching for utilities: glass tokens live in `@theme`, so Tailwind generates `bg-*`/`text-*`/`border-*` from them. HD tokens are plain custom properties and generate nothing. Read them with `var()`.

---

## The HD family

A denser register for working surfaces: opaque planes, a low shadow ladder, small type, and 40px controls. It is used where someone is operating a tool rather than reading a page, and it is deliberately quiet, so that whatever the tool produces is the loudest thing on screen.

### What the tokens carry

`tokens/scale.css` holds the type, space, radius and control scales; `tokens/semantic.css` holds surfaces, elevation, ink, fields, popovers, accents, status, motion and the picture stage. The elevation ladder is the spine of the family: **canvas** (the page floor) → **panel** (the workspace) → **card** (a group of controls). Deepening the canvas is what lets a white panel read as a raised plane instead of dissolving into the page.

Ink is measured against the deepest ground it lands on rather than the lightest, so `--hd-label` and `--hd-muted` clear AA on the canvas, the card and the panel alike.

### Consumer-supplied identity

Six tokens are read by the primitives and declared by the app: `--hd-sec`, `--hd-sec-tint`, `--hd-sec-tint-border` for one section's identity, and `--hd-zone`, `--hd-zone-tint`, `--hd-zone-tint-border` for a whole plane's. Set them as ordinary custom properties on the element that bounds the region:

```css
.settings-panel {
  --hd-zone: var(--my-create-hue);
  --hd-zone-tint: var(--my-create-tint);
  --hd-zone-tint-border: var(--my-create-tint-border);
}
```

Every primitive that reads one falls back to `--hd-accent`, so supplying nothing is a valid choice. Identity hues are audited as graphic colour only: several of them fall under 4.5:1 on the surfaces they are drawn against, so they may tint glyphs and edges and must never colour text.

### Writing new HD rules

1. Read `--hd-*` tokens only. Reaching for a glass token couples the two families.
2. No `.dark` rules. If a value has to change in dark, it needs a token.
3. `font-family: inherit`. The family sets no typeface.
4. Leave the caller's layout to the caller: position, stacking order and identity hue come from outside.
5. Off-scale numbers need a reason. Use the scales, and keep a literal only where the value is doing something the scale cannot.

---

## Design Ethic: Glassmorphism & Depth

The design system uses a glassmorphism-leaning surface system: translucent layers, restrained blur, and soft depth. The goal is hierarchy and polish, not decoration for its own sake.

### Guiding Principles

1. **Use translucency deliberately**: Surfaces should separate layers without making text or controls hard to read.
2. **Let elevation come from blur and layered shadow**: Stronger blur and heavier shadows signal more important surfaces.
3. **Keep borders light**: Prefer translucent borders over heavy outlines.
4. **Design light and dark together**: Every glass surface needs a paired dark-mode treatment.
5. **Prefer hierarchy over novelty**: Stronger treatments belong on modals, popovers, active tabs, and primary panels — not every element.

### Design Tokens

Tokens are defined in `tokens/` using CSS custom properties.

```css
/* Glass surfaces */
--color-glass-surface: rgb(255 255 255 / 0.6);
--color-glass-surface-elevated: rgb(255 255 255 / 0.75);
--color-glass-surface-heavy: rgb(255 255 255 / 0.85);
--color-glass-border: rgb(255 255 255 / 0.35);
--color-glass-border-subtle: rgb(255 255 255 / 0.18);
--color-glass-highlight: rgb(255 255 255 / 0.5);

/* Blur radii */
--blur-glass-sm: 8px; /* Inline elements, badges, stat boxes */
--blur-glass-md: 16px; /* Cards, panels, tab bars */
--blur-glass-lg: 24px; /* Modals, overlays */

/* Layered shadows */
--shadow-glass:          /* Base resting state */ --shadow-glass-hover:
  /* Hovered / interactive state */
  --shadow-glass-elevated: /* Modals, popovers, high-elevation */
  --shadow-glass-inset: /* Inner top highlight for extra depth */
  /* Focus rings */ --shadow-focus-blue: 0 0 0 3px
  color-mix(in srgb, var(--color-brand-blue) 30%, transparent);
--shadow-focus-purple: 0 0 0 3px
  color-mix(in srgb, var(--color-brand-purple) 30%, transparent);

/* Transition tokens */
--transition-fast: 150ms;
--transition-normal: 200ms;
--transition-slow: 300ms;
```

Full token definitions are in `tokens/colors.css`, `tokens/glass.css`, and `tokens/spacing.css`.

---

## Surface Primitives

| Class                      | Purpose                                              | Blur      |
| -------------------------- | ---------------------------------------------------- | --------- |
| `.surface-glass`           | Shared frosted base for section-level surfaces       | `sm`      |
| `.surface-glass--elevated` | Stronger glass surface for more prominent containers | `sm`      |
| `.surface-glass--nested`   | Inner field/group surface without blur               | none      |
| `.surface-glass--subtle`   | Nested panel surface for secondary containment       | none      |
| `.surface-glass--hero`     | Gradient hero-stage glass surface                    | `md`      |
| `.surface-glass--accent`   | Gradient accent surface for intro/identity panels    | inherited |
| `.surface-floating`        | Shared floating panel surface for menus and popovers | `md`      |

Start from these when building new surfaces. Layer a project-specific semantic class on top for domain meaning.

### Writing New Glass Components

Compose a semantic wrapper over an existing primitive. Only add a new material definition when no existing primitive fits.

```css
.my-surface {
  border-radius: 1rem;
  padding: 1rem;
}
```

### Glass Don'ts

- Don't stack blur on nested surfaces without clear reason.
- Don't use `blur(24px)` for normal cards — reserve it for overlays.
- Don't skip `-webkit-backdrop-filter`.
- Don't keep translucency if it hurts readability or contrast.
- Don't apply glass treatment to tiny controls just because it's available.

### Surface Inheritance Model

Three layers:

1. **Tokens** (`tokens/`) — Glass opacity, borders, gradient endpoints, shadow depth.
2. **Shared primitives** (`primitives/`) — Reusable surface roles: `.surface-glass`, `.surface-glass--nested`, `.card`, `.modal-panel`.
3. **Project-specific classes** — Feature-semantic wrappers that add domain meaning or local layout. These stay in each consuming project.

Project classes should not invent new glass values when an existing primitive matches. If a new treatment is needed, add or adjust the token and primitive layer first.

---

## Status Color System

| Status  | Color Family | Usage                                            |
| ------- | ------------ | ------------------------------------------------ |
| Danger  | `danger-*`   | Errors, destructive actions, critical alerts     |
| Warning | `warning-*`  | Caution, pending actions, maintenance states     |
| Info    | `info-*`     | Informational content, neutral highlights        |
| Success | `success-*`  | Completed actions, healthy states, confirmations |

### Color Scales

All scales follow the 50–950 shade convention:

| Scale   | CSS prefix          | Usage                                      |
| ------- | ------------------- | ------------------------------------------ |
| Gray    | `--color-gray-*`    | Neutral backgrounds, text, borders         |
| Primary | `--color-primary-*` | Blue — primary actions, links, focus rings |
| Success | `--color-success-*` | Green — confirmations, positive states     |
| Danger  | `--color-danger-*`  | Red — errors, destructive actions          |
| Warning | `--color-warning-*` | Amber — cautions, pending states           |
| Info    | `--color-info-*`    | Cyan — informational content               |

### Consistency Rules

1. **Alerts**: `.alert--danger` = red, `.alert--warning` = amber, `.alert--info` = blue, `.alert--success` = green
2. **Badges**: Same color mapping via `.badge-danger`, `.badge-warning`, etc.
3. **Forms**: `.form-input-error` uses danger red for validation states.

### Identity Colors (Non-Status)

- **Brand accents**: purple for premium features, indigo for secondary brand
- **Categorical badges**: teal, pink, orange for tagging without status connotation

Projects may define additional identity colors (e.g., domain tinting) in their local styles.

---

## Form Primitives

### Base Elements

| Class             | Purpose                      |
| ----------------- | ---------------------------- |
| `.form-label`     | Input label                  |
| `.form-input`     | Text input field             |
| `.form-select`    | Select dropdown              |
| `.form-textarea`  | Multi-line text input        |
| `.form-hint`      | Help text below input        |
| `.form-error`     | Error text below input       |
| `.form-checkbox`  | Checkbox + label container   |
| `.checkbox-input` | Standard checkbox styling    |
| `.checkbox-label` | Label next to checkbox       |
| `.form-field`     | Field container with spacing |

### Form Principles

1. Group fields by decision, not by data type.
2. Give each section a visible container and short framing text.
3. Keep section containers visually stronger than field containers.
4. Keep helper text attached to the control it explains.
5. Represent states with explicit labels/badges, not hidden conventions.
6. Use presets only where they materially reduce decision cost.
7. End forms with a clear review-and-act zone.

---

## Tailwind v4 CSS-First Configuration

Theme tokens are defined in CSS using `@theme`, not a JavaScript config:

```css
@theme {
  --color-brand-blue: #1d4ed8;
  --color-surface-primary: rgb(255 255 255);
}
```

Components use `@layer components`. Custom utilities use `@utility`.

Reference tokens via CSS variables:

```css
.my-component {
  background-color: var(--color-surface-primary);
}
```

Or use auto-generated Tailwind utilities:

```html
<div class="bg-surface-primary border-edge-primary shadow-card"></div>
```

---

## Accessibility Requirements

### Color Contrast

All badge, alert, and status variants must meet WCAG AA 4.5:1 contrast ratio. Always test dark mode after changing translucent surfaces.

### Focus Rings

Interactive elements use `box-shadow` focus rings:

- Links / informational: `--shadow-focus-blue`
- Buttons / brand: `--shadow-focus-purple`

### Reduced Motion

All animations must respect `@media (prefers-reduced-motion: reduce)`. Content should be shown immediately without transitions.

In the HD family this is already handled at the token: `--hd-dur-fast` and `--hd-dur` both go to `0ms` under the query, so any transition timed with them stops. A HD rule that hardcodes a duration opts itself out of that and has to restate the query.

---

## Extending Locally

Projects add their own tokens and classes in local CSS files that import _after_ the shared system:

```css
/* Project-specific tokens */
@theme {
  --heat-1: #dbeafe; /* heatmap colors — model-ref only */
}

/* Project-specific classes */
@layer components {
  .data-table {
    /* ... */
  } /* model-ref only */
  .btn-purple {
    /* ... */
  } /* frontpage only */
}
```

The shared layer is the foundation; local layers extend without conflicting.
