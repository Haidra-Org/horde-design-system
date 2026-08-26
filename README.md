# Horde Design System

Shared design tokens and CSS primitives for [Haidra-Org](https://github.com/Haidra-Org) frontends.

Consumed by:

- **[horde-model-reference-frontend](https://github.com/Haidra-Org/horde-model-reference-frontend)** — Model reference management UI
- **[AiHordeFrontpage](https://github.com/Haidra-Org/AiHordeFrontpage)** — AI Horde main frontend

## Two families

The system ships two independent visual families. Pick one per surface; they are not meant to be mixed on the same element.

|                     | Glass (`.btn`, `.card`, `.surface-glass`, …)                      | HD (`.hd-btn`, `.hd-card`, `.hd-chip`, …)                                    |
| ------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Look                | Translucent, blurred, gradient-lit                                | Opaque, dense, low-shadow working surfaces                                   |
| Tokens              | `@theme` names in `tokens/colors.css`, `glass.css`, `spacing.css` | `--hd-*` custom properties in `tokens/scale.css`, `tokens/semantic.css`      |
| Utilities generated | Yes — Tailwind builds `bg-*`/`text-*` from `@theme`               | No — `--hd-*` are plain custom properties and generate nothing               |
| Dark mode           | Static light/dark token pairs plus per-rule `.dark` overrides     | One token name whose value changes under `.dark`; never a `.dark .hd-*` rule |

Neither family reads the other's tokens, so a change to one cannot move the other.

## Usage

This repository is integrated as a **git submodule** at `src/shared/design-system/` in each consuming project.

### Installation

```bash
# Clone with submodules
git clone --recurse-submodules <project-url>

# Or initialize after clone
git submodule update --init --recursive
```

### Import

In your project's main CSS entry point (after `@import 'tailwindcss'`):

```css
@import 'tailwindcss';

/* Shared design system */
@import '../shared/design-system/tokens/index.css';
@import '../shared/design-system/primitives/index.css';

/* Project-specific extensions */
@import './theme/variables.css';
@import './components/base.css';
/* ... */
```

## Structure

```
horde-design-system/
├── tokens/              Design tokens (CSS custom properties)
│   ├── colors.css       Gray, primary, success, danger, warning, info scales
│   ├── glass.css        Glassmorphism surfaces, borders, blurs, shadows
│   ├── spacing.css      Spacing, border radius, shadows, transitions
│   ├── scale.css        HD type, space, radius and control scales
│   ├── semantic.css     HD surfaces, ink, fields, popovers, accents, motion, stage
│   └── index.css        Barrel import
├── primitives/          Reusable CSS component classes
│   ├── surfaces.css     .surface-glass family, .surface-floating
│   ├── buttons.css      .btn family; .hd-btn family
│   ├── badges.css       .badge family; .hd-badge, .hd-sec-chip
│   ├── cards.css        .card family; .hd-card, .hd-card-title, .hd-disclosure, .hd-callout
│   ├── chips.css        .filter-chip; .hd-chip
│   ├── forms.css        .form-* family; .hd-input, .hd-textarea, .hd-label, .hd-help, .hd-switch
│   ├── modals.css       .modal-overlay, .modal-dialog, .modal-title, .modal-content
│   ├── alerts.css       .alert, .alert--success, .alert--danger, .alert--warning, .alert--info
│   ├── typography.css   .heading-page, .heading-section, .link, .text-muted
│   ├── tables.css       .table-head-subtle, .table-body-default, .table-cell-xs*
│   ├── tabs.css         .tabs-nav/.tabs-link core + aliases; .hd-subtabs
│   ├── tooltips.css     .tooltip-wrapper, .tooltip-text, position variants
│   ├── data-display.css .data-item, .data-value, .stat-column, grids; .hd-row, .hd-empty, .hd-stat, .hd-skeleton
│   ├── lists.css        .hd-list, .hd-list-head, .hd-list-th, .hd-list-row
│   ├── menus.css        .hd-menu, .hd-menu-item
│   ├── segmented.css    .hd-seg, .hd-seg-opt
│   ├── utilities.css    .sr-only
│   └── index.css        Barrel import
├── components/          Angular standalone components
│   ├── badge/           HordeBadgeComponent
│   ├── alert/           HordeAlertComponent
│   └── button/          HordeButtonComponent
└── docs/                Design language documentation
    ├── design-system.md   Design ethic, tokens, surfaces, color system
    └── component-patterns.md  Full CSS class catalog
```

## Requirements

- **Tailwind CSS** v4+ (CSS-first configuration with `@theme`)
- Dark mode via `.dark` class strategy

## Token Reference

### Color Scales

All color scales follow the 50–950 shade convention. Available scales:

| Scale   | CSS prefix          | Usage                                      |
| ------- | ------------------- | ------------------------------------------ |
| Gray    | `--color-gray-*`    | Neutral backgrounds, text, borders         |
| Primary | `--color-primary-*` | Blue — primary actions, links, focus rings |
| Success | `--color-success-*` | Green — confirmations, positive states     |
| Danger  | `--color-danger-*`  | Red — errors, destructive actions          |
| Warning | `--color-warning-*` | Amber — cautions, pending states           |
| Info    | `--color-info-*`    | Cyan — informational content               |

### Glass Tokens

Glassmorphism design tokens for translucent surfaces with depth.

| Token group | Light mode                 | Dark mode                         |
| ----------- | -------------------------- | --------------------------------- |
| Surfaces    | `--color-glass-surface-*`  | `--color-glass-surface-dark-*`    |
| Borders     | `--color-glass-border-*`   | `--color-glass-border-dark-*`     |
| Gradients   | `--color-glass-gradient-*` | `--color-glass-gradient-*-dark-*` |
| Blur radii  | `--blur-glass-sm/md/lg`    | (same)                            |
| Shadows     | `--shadow-glass-*`         | `--shadow-glass-dark-*`           |

### Spacing & Layout

| Token                           | Value         | Usage               |
| ------------------------------- | ------------- | ------------------- |
| `--spacing-xs`                  | 0.25rem       | Tight spacing       |
| `--spacing-sm`                  | 0.5rem        | Small gaps          |
| `--spacing-md`                  | 1rem          | Standard spacing    |
| `--spacing-lg`                  | 1.5rem        | Section spacing     |
| `--spacing-xl`                  | 2rem          | Large spacing       |
| `--spacing-2xl`                 | 3rem          | Page-level spacing  |
| `--radius-sm/md/lg/xl`          | 0.25–0.75rem  | Border radius scale |
| `--transition-fast/normal/slow` | 150/200/300ms | Animation durations |

### HD Tokens

Plain custom properties on `:root`, with a `.dark` block that redefines the half that flips. They generate no Tailwind utilities: read them with `var()`.

`tokens/scale.css` — light and dark alike:

| Token                       | Values                                         |
| --------------------------- | ---------------------------------------------- |
| `--hd-text-2xs … -xl`       | 10, 11.5, 12.5, 13.5, 15.5, 20px               |
| `--hd-space-1 … -8`         | 4, 8, 10 (`-2-5`), 12, 16, 24, 32px            |
| `--hd-radius-sm/md/lg/pill` | 8, 12, 16, 999px                               |
| `--hd-control-h`            | 40px, with `--hd-control-h-dense` at 36px      |
| `--hd-help-trigger`         | 24px — the box a per-field help glyph reserves |

`tokens/semantic.css` — each of these has a dark value:

| Token group | Names                                                                                                                                                        |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Surfaces    | `--hd-canvas`, `--hd-panel`, `--hd-card`, `--hd-card-border`, `--hd-border`, `--hd-border-soft`, `--hd-border-subtle`                                        |
| Elevation   | `--hd-elev-1/2/3`                                                                                                                                            |
| Ink         | `--hd-ink`, `--hd-ink-2`, `--hd-label`, `--hd-muted`                                                                                                         |
| Fields      | `--hd-field`, `--hd-field-soft`, `--hd-field-border`                                                                                                         |
| Popover     | `--hd-pop-surface`, `--hd-pop-border`, `--hd-pop-hover`, `--hd-pop-stripe`, `--hd-pop-accent`, `--hd-pop-shadow`                                             |
| Accents     | `--hd-accent`, `--hd-accent-hover`, `--hd-accent-tint`, `--hd-accent-tint-border`, and the same shape for `--hd-purple*` and `--hd-green*`                   |
| Status      | `--hd-danger`, `--hd-danger-tint`, `--hd-changed`                                                                                                            |
| Controls    | `--hd-seg-track`, `--hd-seg-active`, `--hd-seg-active-ink`, `--hd-switch-off`                                                                                |
| Motion      | `--hd-dur-fast`, `--hd-dur`, `--hd-ease` — the two durations go to `0ms` under `prefers-reduced-motion`                                                      |
| Stage       | `--hd-stage`, `--hd-stage-rim`, `--hd-stage-ink`, `--hd-stage-label`, `--hd-stage-scrim` — a dark lightbox that does not flip with the theme, except its rim |

`--hd-pop-accent` is the accent as text or icon on a popover surface; `--hd-accent` is a fill with white text on it, which is why one lightens in dark and the other does not.

The dark theme carries two surface ramps. The default is a slate matched to a consuming app's own dark body, so an HD plane sits level with the page around it; a root wearing `hd-deep` takes the neutral, deeper charcoal instead, for surfaces where pictures are judged and a hue in the surround would bias the eye. `hd-deep` restates only the surfaces, their edges, the fields, the popover planes and `--hd-label`/`--hd-muted`/`--hd-pop-accent`, and only under `.dark`.

#### Consumer-supplied identity

Six names are read by the primitives but declared by the consuming app, on whatever element bounds the region:

| Token                                                  | Meaning                                                                                           |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| `--hd-sec`, `--hd-sec-tint`, `--hd-sec-tint-border`    | The identity of one section: `.hd-chip`, `.hd-sec-chip` and the `.hd-card-title` hairline take it |
| `--hd-zone`, `--hd-zone-tint`, `--hd-zone-tint-border` | The identity of a whole plane: `.hd-card`'s top edge and `.hd-help-*` take it                     |

Every primitive that reads one falls back to the accent, so an app that supplies nothing still gets a coherent result. Identity hues are audited as graphic colour: use them for glyphs and edges, never for text.

## Primitive Reference

### Surface Classes

| Class                      | Purpose                                      |
| -------------------------- | -------------------------------------------- |
| `.surface-glass`           | Base frosted glass panel                     |
| `.surface-glass--elevated` | Stronger glass with border + inset highlight |
| `.surface-glass--nested`   | Inner panel without backdrop blur            |
| `.surface-glass--subtle`   | Subtle nested panel                          |
| `.surface-glass--hero`     | Gradient hero with medium blur               |
| `.surface-glass--accent`   | Gradient accent surface                      |
| `.surface-floating`        | Elevated dropdown/popover with medium blur   |

### Button Classes

| Class            | Purpose                                        |
| ---------------- | ---------------------------------------------- |
| `.btn`           | Base button with focus ring and disabled state |
| `.btn-primary`   | Blue primary action                            |
| `.btn-secondary` | Gray secondary action                          |
| `.btn-danger`    | Red destructive action                         |
| `.btn-success`   | Green confirmation action                      |
| `.btn-sm`        | Small size variant                             |
| `.btn-lg`        | Large size variant                             |

### Other Primitives

- **Badges**: `.badge`, `.badge-base` (compatibility alias), `.badge-success`, `.badge-danger`, `.badge-warning`, `.badge-info`, `.badge-secondary`
- **Cards**: `.card`, `.card-header`, `.card-body`, `.card-footer`
- **Forms**: `.form-input`, `.form-textarea`, `.form-select`, `.form-label`, `.form-hint`, `.form-error`, `.form-checkbox`, `.checkbox-label`
- **Modals**: `.modal-overlay`, `.modal-dialog`, `.modal-title`, `.modal-content`, `.modal-actions`
- **Alerts**: `.alert`, `.alert--success`, `.alert--danger`, `.alert--warning`, `.alert--info`
- **Typography**: `.heading-page`, `.heading-section`, `.heading-card`, `.link`, `.text-muted`, `.field-label`, `.field-value`, `.label-hint`, `.label-warning`

### Table Primitives

The shared table micro-primitives are intentionally low-level and feature-agnostic:

- Header and body wrappers: `.table-head-subtle`, `.table-body-default`
- Row treatment: `.table-row-hover-subtle`
- Dense header cells: `.table-header-cell-xs*`, `.table-header-cell-xs-*-caps`
- Dense body cells: `.table-cell-xs*`, `.table-cell-mono-xs`, `.table-cell-muted-xs-inline`

Projects should keep feature-specific table layouts (column structures, domain-specific row classes) in local styles.

### Tab Primitives

Shared tab classes cover the common base interaction model:

- Containers: `.tabs-nav`, `.tabs-nav--compact`
- Items: `.tabs-link`, `.tabs-link--compact`
- Active state: `.tabs-link-active`

Compatibility aliases are included for existing horde-model-reference-frontend class names:

- `.tab-navigation`, `.tab-navigation-compact`
- `.tab-link`, `.tab-link-compact`, `.tab-active`

Sticky tab behavior, overflow arrows, and route-specific tab mechanics remain local to each project.

### HD Family

Dense working-surface primitives, each in a `/* ===== HD family ===== */` section of the file that owns its kind.

| Classes                                                                                                                       | File               |
| ----------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `.hd-btn` + `--primary`, `--tonal`, `--ghost`, `--dense`, `--icon`                                                            | `buttons.css`      |
| `.hd-chip`, `.hd-chip--active`                                                                                                | `chips.css`        |
| `.hd-badge`, `.hd-sec-chip` + `--sm`, `--lg`                                                                                  | `badges.css`       |
| `.hd-card`, `.hd-card-title`                                                                                                  | `cards.css`        |
| `.hd-disclosure` + `--open`, `.hd-disclosure-head`, `-name`, `-sum`, `-chev`, `-body`                                         | `cards.css`        |
| `.hd-callout` + `--accent`, `.hd-callout-title`, `.hd-callout-body`, `.hd-callout-actions`                                    | `cards.css`        |
| `.hd-input`, `.hd-textarea`, `.hd-textarea--resize`, `.hd-label`, `.hd-sublabel`, `.hd-help`, `.hd-help-btn`, `.hd-help-note` | `forms.css`        |
| `.hd-switch` + `--purple`, `.hd-switch-row`, `.hd-switch-track`, `.hd-switch-thumb`                                           | `forms.css`        |
| `.hd-seg`, `.hd-seg-opt`, `.hd-seg--xs`                                                                                       | `segmented.css`    |
| `.hd-subtabs`, `.hd-subtabs-scroll`, `.hd-subtab`, `.hd-subtab--active`                                                       | `tabs.css`         |
| `.hd-row`, `.hd-row-val`, `.hd-empty`, `.hd-empty-title`, `.hd-empty-sub`                                                     | `data-display.css` |
| `.hd-stats`, `.hd-stat`, `.hd-stat-label`, `.hd-stat-value`, `.hd-stat-note`                                                  | `data-display.css` |
| `.hd-skeleton`, `.hd-skeleton-bar` + `--title`, `--wide`                                                                      | `data-display.css` |
| `.hd-list`, `.hd-list-head`, `.hd-list-th` + `--active`, `--right`, `.hd-list-sort`, `.hd-list-row` + `--idle`                | `lists.css`        |
| `.hd-menu`, `.hd-menu-item`                                                                                                   | `menus.css`        |

Rules for working in this family:

- Read `--hd-*` only. A HD rule that reaches for a glass token has crossed the line between the two.
- No `.dark` rules. If something needs to change in dark, it needs a token, not a selector.
- `font-family: inherit` — the family sets no typeface, so a consumer's choice reaches it.
- Layout that belongs to the caller stays with the caller: `.hd-menu` carries its plane but no position, and `.hd-subtab--active` carries its ink but no underline colour.
- Where a primitive needs a measurement only the consumer can know, it reads a custom property with a sane fallback rather than growing a modifier per case: `.hd-list-head` and `.hd-list-row` take their grid from `--hd-list-cols`, declared on whatever element wraps the list, so a breakpoint that changes the columns changes the header and the rows together.

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

## Updating

```bash
# In the consuming project
cd src/shared/design-system
git pull origin main
cd ../..
git add src/shared/design-system
git commit -m "chore: update design system submodule"
```

## Versioning

Git tags mark milestones: `v0.1.0` (initial tokens + primitives), etc. Each consuming project's submodule commit pin acts as a version lock.

## License

[MIT](LICENSE)
