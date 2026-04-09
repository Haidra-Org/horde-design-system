# CSS Component Patterns

Class catalog for the shared Horde design system primitives. For design philosophy, tokens, and surface primitives, see [design-system.md](design-system.md). For layout in the shared `primitives/` directory, see the [README](../README.md).

---

## Surfaces (`primitives/surfaces.css`)

```css
.surface-glass           /* Base frosted glass panel */
.surface-glass--elevated /* Stronger glass with border + inset highlight */
.surface-glass--nested   /* Inner panel without backdrop blur */
.surface-glass--subtle   /* Subtle nested panel */
.surface-glass--hero     /* Gradient hero with medium blur */
.surface-glass--accent   /* Gradient accent surface */
.surface-floating        /* Elevated dropdown/popover with medium blur */
```

---

## Cards (`primitives/cards.css`)

```css
.card              /* Glass-surface card base */
.card-header       /* Card header with bottom border */
.card-body         /* Card body padding */
.card-footer       /* Card footer with top border */
```

---

## Buttons (`primitives/buttons.css`)

```css
.btn               /* Base button with focus ring and disabled state */
.btn-primary       /* Blue primary action */
.btn-secondary     /* Gray secondary action */
.btn-danger        /* Red destructive action */
.btn-success       /* Green confirmation action */
.btn-warning       /* Yellow cautionary action */
.btn-muted         /* Gray tertiary action */
.btn-purple        /* Purple brand accent action */
.btn-source-control /* Subtle source-control action */
.btn-icon          /* Icon-only button (square padding) */
.btn-icon-danger   /* Destructive icon-only button */
.btn-xs            /* Extra-small size */
.btn-sm            /* Small size */
.btn-md            /* Medium size (base) */
.btn-lg            /* Large size */
.btn-responsive    /* 100% width on small screens */
.btn-disabled      /* Disabled cursor + reduced opacity */
.btn-group         /* Responsive button row (gap-3, column on small screens) */
.btn-group--center /* Centered button row */
.btn-group--inline /* Inline button row (doesn't stack) */
```

### Button States

All button variants include `:hover`, `:focus-visible`, and `.dark` treatments.
Error state: `.btn-primary.btn--error` triggers a shake animation.

---

## Alerts (`primitives/alerts.css`)

```css
.alert             /* Base alert container */
.alert-icon        /* Icon container inside alert */
.alert-content     /* Text content area */
.alert-title       /* Bold title inside alert */
.alert-actions     /* Action buttons inside alert */
.alert-danger      /* Red error/danger variant */
.alert-warning     /* Amber warning variant */
.alert-info        /* Blue informational variant */
.alert-success     /* Green success variant */
.alert-sm          /* Small variant */
.alert-lg          /* Large variant */
.alert-inline      /* Inline compact variant */
```

---

## Badges (`primitives/badges.css`)

### Base

```css
.badge             /* inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium */
.badge-base        /* Compatibility alias for .badge */
.badge-sm          /* Compact: px-2 py-0.5 */
.badge-container   /* Flex wrap gap-2 for badge groups */
.badge-container-spaced  /* Badge container with top margin */
.badge-container-tight   /* Narrower gap for compact layouts */
```

### Semantic Variants

| Class              | Color | Usage                  |
| ------------------ | ----- | ---------------------- |
| `.badge-primary`   | Blue  | Brand / default        |
| `.badge-secondary` | Gray  | Neutral / deemphasized |
| `.badge-info`      | Blue  | Informational          |
| `.badge-warning`   | Amber | Caution                |
| `.badge-success`   | Green | Positive / healthy     |
| `.badge-danger`    | Red   | Error / destructive    |

### Extra Color Variants

| Class                | Color  | Usage              |
| -------------------- | ------ | ------------------ |
| `.badge-purple`      | Purple | Brand accent       |
| `.badge-pink`        | Pink   | Alternative accent |
| `.badge-indigo`      | Indigo | Secondary brand    |
| `.badge-teal`        | Teal   | Categorical        |
| `.badge-recommended` | Yellow | Featured / starred |
| `.badge-easy-to-use` | Green  | Beginner-friendly  |

### Interactive Badges

```css
.badge-dismissible  /* Clickable with hover opacity */
.badge-outline      /* Transparent bg, gray border */
.badge-online       /* Green with pulsing dot indicator */
```

### Tags

```css
.tag             /* Smaller outline-style inline marker */
.tag-primary     /* Blue tag */
.tag-success     /* Green tag */
.tag-info        /* Cyan tag */
.tag-warning     /* Amber tag */
.tag-danger      /* Red tag */
```

---

## Forms (`primitives/forms.css`)

```css
.form-label        /* Input label */
.form-input        /* Text input field (glass surface) */
.form-select       /* Select dropdown (glass surface) */
.form-textarea     /* Multi-line text input (glass surface) */
.form-hint         /* Help text below input */
.form-error        /* Error message text */
.form-field        /* Field container with spacing */
.form-checkbox     /* Checkbox + label container */
.checkbox-input    /* Standard checkbox styling */
.checkbox-label    /* Label text next to checkbox */
```

All input elements include `:focus`, `.dark`, `::placeholder`, and `:disabled` states.

---

## Modals (`primitives/modals.css`)

```css
.modal-overlay       /* Full-screen backdrop (z-50) */
.modal-backdrop      /* Dark semi-transparent background */
.modal-backdrop--blur /* Blurred backdrop variant */
.modal-overlay--high /* Higher z-index for nested modals */
.modal-panel         /* Dialog container (glass surface, max-height: 80vh) */
.modal-panel--sm     /* max-w-sm */
.modal-panel--md     /* max-w-md */
.modal-panel--lg     /* 36rem */
.modal-panel--xl     /* max-w-3xl (max-w-4xl on lg screens) */
.modal-panel--full   /* Full viewport */
.modal-header        /* Header row with justify-between */
.modal-scroll        /* Scrollable content area (max-height: 60vh) */
.modal-actions       /* Button row at dialog bottom */
```

Projects typically override `.modal-title`, `.modal-close`, `.modal-body`, and `.modal-actions` locally for their specific typography and spacing needs.

---

## Typography (`primitives/typography.css`)

```css
.heading-page      /* Page-level heading (2xl) */
.heading-section   /* Section heading (lg) */
.heading-card      /* Card heading (base) */
.link              /* Styled anchor with hover underline */
.text-muted        /* De-emphasized helper text */
.field-label       /* Key label in detail views */
.field-value       /* Value text in detail views */
.label-hint        /* Inline hint annotation */
.label-warning     /* Inline warning annotation */
.checkbox-label    /* Checkbox label text */
```

---

## Tables (`primitives/tables.css`)

Low-level, feature-agnostic table micro-primitives:

```css
.table-head-subtle           /* Subtle header wrapper */
.table-body-default          /* Default body wrapper */
.table-row-hover-subtle      /* Hover treatment for rows */
.table-header-cell-xs        /* Dense header cells */
.table-header-cell-xs-caps   /* Dense caps header cells */
.table-cell-xs               /* Dense body cells */
.table-cell-mono-xs          /* Monospace dense cells */
.table-cell-muted-xs-inline  /* Muted inline cells */
```

Projects keep feature-specific table layouts (column structures, domain-specific row classes) in local styles.

---

## Tabs (`primitives/tabs.css`)

```css
.tabs-nav            /* Tab container */
.tabs-nav--compact   /* Compact tab container */
.tabs-link           /* Tab item */
.tabs-link--compact  /* Compact tab item */
.tabs-link-active    /* Active tab state */
```

Compatibility aliases for horde-model-reference-frontend:

```css
.tab-navigation, .tab-navigation-compact
.tab-link, .tab-link-compact, .tab-active
```

---

## Data Display (`primitives/data-display.css`)

### Data Items

```css
.data-item           /* Vertical flex stack for label + value */
.data-item-box       /* Glass surface for key-value pairs */
.data-item-centered  /* Centered variant */
```

### Labels & Values

```css
.data-label          /* Label (secondary text) */
.data-label-spaced   /* Label with top margin */
.data-value          /* Prominent value text */
.data-value-split    /* Stacked metric pair */
.data-value-lg       /* Large stat (text-2xl) */
.data-value-xl       /* Hero stat (text-4xl) */
```

### Stat Columns

```css
.stat-column         /* Padded glass card for grouped stats */
.stat-item           /* Icon + text row */
.stat-text           /* Body text in stat items */
.stat-text-label     /* Bold label within stat text */
```

### Grids

| Class             | Columns                      |
| ----------------- | ---------------------------- |
| `.data-grid-2`    | `grid-cols-2`                |
| `.data-grid-2-3`  | `grid-cols-2 lg:grid-cols-3` |
| `.quick-nav-grid` | `grid-cols-1 sm:grid-cols-3` |

### Utility

```css
.text-tabular        /* font-variant-numeric: tabular-nums */
```

---

## Tooltips (`primitives/tooltips.css`)

### Base

```css
.tooltip-trigger     /* Trigger wrapper (position: relative) */
.tooltip-wrapper     /* Alias for tooltip-trigger */
.tooltip-underline   /* Dotted border-bottom hint */
.dotted-underline    /* Alias for tooltip-underline */
.tooltip-content     /* Tooltip bubble (hidden by default) */
.tooltip-text        /* Alias for tooltip-content */
```

### Position Variants

```css
.tooltip-pos-left    /* Left-aligned tooltip */
.tooltip-pos-right   /* Right-aligned tooltip */
.tooltip-pos-bottom  /* Below trigger */
```

### Visibility

- Hover: visible on `@media (hover: hover)`
- Focus: visible on `:focus-within`
- Accessible focus ring on trigger

### CSS Custom Properties

```css
--tooltip-width: 300px;
--tooltip-max-width: calc(100vw - 2rem);
--tooltip-offset: 125%;
--tooltip-arrow-size: 5px;
--tooltip-z-index: 1000;
--tooltip-transition-duration: 200ms;
```

---

## Utilities (`primitives/utilities.css`)

```css
.sr-only             /* Visually hidden, accessible to screen readers */
```

---

## Accessibility Patterns

### Focus Rings

Interactive elements use `box-shadow` focus rings:

- Links / informational: `--shadow-focus-blue`
- Buttons / brand: `--shadow-focus-purple`

### Color Contrast

All badge, alert, and status variants meet WCAG AA 4.5:1 contrast ratio in both light and dark modes.

### Reduced Motion

All animations respect `@media (prefers-reduced-motion: reduce)`.

### Keyboard Navigation

- Tooltips: visible on `:focus-within`
- Tab bars: standard tab/arrow key patterns
- Modal focus traps are the responsibility of consuming projects
