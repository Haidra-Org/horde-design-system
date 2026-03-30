import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from "@angular/core";

export type BadgeVariant =
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "secondary";

@Component({
  selector: "horde-badge",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content />`,
  host: {
    "[class]": "hostClass()",
  },
})
export class HordeBadgeComponent {
  variant = input<BadgeVariant>("secondary");

  hostClass = computed(() => `badge badge-${this.variant()}`);
}
