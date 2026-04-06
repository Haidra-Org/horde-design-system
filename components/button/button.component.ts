import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'info'
  | 'warning'
  | 'muted'
  | 'source-control'
  | 'purple'
  | 'icon'
  | 'icon-danger';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'horde-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      [class]="buttonClass()"
      [attr.aria-busy]="loading() ? 'true' : null"
      [disabled]="disabled() || loading()"
      [type]="type()"
    >
      <ng-content />
    </button>
  `,
})
export class HordeButtonComponent {
  variant = input<ButtonVariant>('primary');
  size = input<ButtonSize>('md');
  type = input<ButtonType>('button');
  disabled = input(false);
  loading = input(false);

  buttonClass = computed(() => {
    const classes = ['btn', `btn-${this.variant()}`];

    if (this.size() !== 'md') {
      classes.push(`btn-${this.size()}`);
    }

    if (this.loading()) {
      classes.push('btn-loading');
    }

    return classes.join(' ');
  });
}
