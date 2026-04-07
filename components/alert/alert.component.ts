import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from "@angular/core";

export type AlertVariant = "success" | "danger" | "warning" | "info";
export type AlertSize = "sm" | "md" | "lg";
export type AlertRole = "alert" | "status" | "note";
export type AlertAriaLive = "polite" | "assertive" | "off";

@Component({
  selector: "horde-alert",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content />`,
  host: {
    "[class]": "hostClass()",
    "[attr.role]": "role()",
    "[attr.aria-live]": "ariaLive()",
  },
})
export class HordeAlertComponent {
  variant = input<AlertVariant>("info");
  size = input<AlertSize>("md");
  inline = input(false);
  role = input<AlertRole>("alert");
  ariaLive = input<AlertAriaLive | null>(null);

  hostClass = computed(() => {
    const classes = [
      "alert",
      `alert--${this.variant()}`,
      `alert-${this.variant()}`,
    ];

    if (this.size() !== "md") {
      classes.push(`alert--${this.size()}`);
    }

    if (this.inline()) {
      classes.push("alert--inline");
    }

    return classes.join(" ");
  });
}
