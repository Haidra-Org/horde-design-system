# CSS Component Patterns

Class catalog for the shared Horde design system primitives. For design philosophy, tokens, and surface primitives, see [design-system.md](design-system.md). For layout in the shared `primitives/` directory, see the [README](../README.md).

Everything from here to [HD Family](#hd-family) belongs to the glass family, whose classes are unprefixed and whose dark mode is written as per-rule `.dark` overrides of `@theme` token pairs. The HD family is prefixed `hd-`, reads `--hd-*` custom properties, and gets its dark mode entirely from those tokens: it has no `.dark` rules and must never gain one.

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
.alert--danger     /* Red error/danger variant */
.alert--warning    /* Amber warning variant */
.alert--info       /* Blue informational variant */
.alert--success    /* Green success variant */
.alert--sm         /* Small variant */
.alert--lg         /* Large variant */
.alert--inline     /* Inline compact variant */
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

## Filter Chips (`primitives/chips.css`)

```css
.filter-chip            /* Pill toggle: hairline border, glass-subtle fill, cursor pointer */
.filter-chip--active    /* Active/pressed state (alias for [aria-pressed="true"]) */
.filter-chip__count     /* Count badge inside the chip */
.filter-chip--accent    /* Signals that --chip-accent is set (domain color applied by consumer) */
.filter-chip-group      /* Horizontal flex row of chips with gap */
```

States: `:hover`, `[aria-pressed="true"]` (active), `:focus-visible`.

**Accent pattern**: The consumer sets `--chip-accent: var(--color-accent-image)` (or text/utility) on the chip element. The `--active` state and `__count` badge read this property for domain coloring. The generic `.filter-chip--accent` class is a no-op marker — color comes from the custom property.

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

## HD Family

A denser register for working surfaces. Each block lives in a `/* ===== HD family ===== */` section of the file that owns its kind, beside the glass classes above. All of it reads `--hd-*` tokens; see the README's HD Token Reference.

Two contracts run through the family. `--hd-sec*` is the identity of one section and `--hd-zone*` the identity of a whole plane; both are declared by the consuming app and both fall back to `--hd-accent` when nothing is supplied.

### Buttons (`primitives/buttons.css`)

```css
.hd-btn             /* Base and neutral weight: panel surface, border, elev-1 */
.hd-btn--primary    /* Accent fill, white text */
.hd-btn--tonal      /* Accent tint, accent text */
.hd-btn--ghost      /* No surface until hover */
.hd-btn--dense      /* 36px instead of 40px, tighter padding */
.hd-btn--icon       /* Square, with the word in aria-label */
```

The neutral weight is the base rule, so the other three restate the surface they replace rather than only adding to it. Under `(pointer: coarse)` every weight takes a 44px floor, dense included.

### Chips (`primitives/chips.css`)

```css
.hd-chip            /* Pill, field surface, section-tinted edge */
.hd-chip--active    /* Section hue as a surface, mixed back towards the card */
```

### Badges and identity chips (`primitives/badges.css`)

```css
.hd-badge           /* Small text mark, transparent edge for a caller to colour */
.hd-sec-chip        /* 18px square carrying a section's glyph */
.hd-sec-chip--sm    /* 14px, for dense lists */
.hd-sec-chip--lg    /* 22px, for page and section heads */
```

`.hd-sec-chip` carries a glyph, never text: several identity hues fall under 4.5:1 on the surfaces it sits on.

### Cards (`primitives/cards.css`)

```css
.hd-card            /* Card surface, plane-hued 2px top edge, tighter row-gap */
.hd-card-title      /* Uppercase eyebrow with a hairline running out to the row's end */
```

The card's top edge and the title's hairline are the same identity rule at two scales. The title prefers `--hd-sec-tint-border`, falling back to `--hd-zone-tint-border` and then to `--hd-border`.

### Fields and help (`primitives/forms.css`)

```css
.hd-input             /* 40px single-line field */
.hd-textarea          /* Fixed-height multi-line field */
.hd-textarea--resize  /* Starts at two rows, three from 1024px, drag-to-grow */
.hd-label
.hd-sublabel
.hd-help              /* display: contents — a wrapper transparent to layout */
.hd-help-btn          /* The glyph; hue from --hd-zone, open state on aria-expanded */
.hd-help-note         /* Full-width note under the row it explains */
```

Fields share one focus treatment: a ring outside the edge, never a glow. On coarse pointers `.hd-help-btn` grows a 44px `::after` overlay rather than growing itself, so the glyph stays small beside its label.

### Segmented control (`primitives/segmented.css`)

```css
.hd-seg              /* Track with a 3px inset */
.hd-seg-opt          /* Option; selected state hangs off aria-pressed="true" */
.hd-seg--xs          /* Narrow: horizontal padding tightens, height does not */
```

### Subtabs (`primitives/tabs.css`)

```css
.hd-subtabs          /* The bar; height behind --hd-subtab-h, default 45px */
.hd-subtabs-scroll   /* The scrolling half, with the scrollbar hidden */
.hd-subtab
.hd-subtab--active   /* Ink only — the underline colour is the consumer's */
```

Only the tabs scroll, so anything parked at the far edge should be a sibling of `.hd-subtabs-scroll` rather than its last child.

### Rows and empty states (`primitives/data-display.css`)

```css
.hd-row              /* Label left, value right; clears button chrome */
.hd-row-val
.hd-empty            /* Centred nothing-here state */
.hd-empty-title
.hd-empty-sub
```

### Menus (`primitives/menus.css`)

```css
.hd-menu             /* Popover plane: surface, edge, shadow, scrolling */
.hd-menu-item
```

`.hd-menu` carries no position: where it opens, and above what, is the caller's business.

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
