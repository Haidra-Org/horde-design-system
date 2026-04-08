# Horde Design System

Shared design tokens and CSS primitives for [Haidra-Org](https://github.com/Haidra-Org) frontends.

Consumed by:

- **[horde-model-reference-frontend](https://github.com/Haidra-Org/horde-model-reference-frontend)** — Model reference management UI
- **[AiHordeFrontpage](https://github.com/Haidra-Org/AiHordeFrontpage)** — AI Horde main frontend

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
@import "tailwindcss";

/* Shared design system */
@import "../shared/design-system/tokens/index.css";
@import "../shared/design-system/primitives/index.css";

/* Project-specific extensions */
@import "./theme/variables.css";
@import "./components/base.css";
/* ... */
```

## Structure

```
horde-design-system/
├── tokens/              Design tokens (CSS custom properties)
│   ├── colors.css       Gray, primary, success, danger, warning, info scales
│   ├── glass.css        Glassmorphism surfaces, borders, blurs, shadows
│   ├── spacing.css      Spacing, border radius, shadows, transitions
│   └── index.css        Barrel import
├── primitives/          Reusable CSS component classes
│   ├── surfaces.css     .surface-glass family, .surface-floating
│   ├── buttons.css      .btn, .btn-primary, .btn-secondary, .btn-danger, .btn-success
│   ├── badges.css       .badge, .badge-success, .badge-danger, .badge-warning, .badge-info
│   ├── cards.css        .card, .card-header, .card-body, .card-footer
│   ├── forms.css        .form-input, .form-label, .form-textarea, .form-select, .form-checkbox
│   ├── modals.css       .modal-overlay, .modal-dialog, .modal-title, .modal-content
│   ├── alerts.css       .alert, .alert-success, .alert-danger, .alert-warning, .alert-info
│   ├── typography.css   .heading-page, .heading-section, .link, .text-muted
│   ├── tables.css       .table-head-subtle, .table-body-default, .table-cell-xs*
│   ├── tabs.css         .tabs-nav/.tabs-link core + compatibility aliases
│   ├── tooltips.css     .tooltip-wrapper, .tooltip-text, position variants
│   ├── data-display.css .data-item, .data-value, .stat-column, grids
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
- **Alerts**: `.alert`, `.alert-success`, `.alert-danger`, `.alert-warning`, `.alert-info`
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
