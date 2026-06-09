import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
} from '@angular/core';
import { IconComponent } from '../../../../app/components/common/icon.component';

export interface SegmentedOption {
  value: string;
  label: string;
  icon?: string;
}

@Component({
  selector: 'app-segmented-control',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'radiogroup',
    '[attr.aria-label]': 'ariaLabel()',
  },
  template: `
    <div
      class="segmented-control"
      [class.segmented-control--sm]="size() === 'sm'"
    >
      @for (option of options(); track option.value) {
        <button
          type="button"
          class="segmented-control__option"
          [class.segmented-control__option--active]="value() === option.value"
          [attr.aria-checked]="value() === option.value"
          role="radio"
          (click)="value.set(option.value)"
        >
          @if (option.icon) {
            <app-icon [name]="option.icon" />
          }
          <span>{{ option.label }}</span>
        </button>
      }
    </div>
  `,
})
export class SegmentedControlComponent {
  readonly options = input.required<SegmentedOption[]>();
  readonly value = model.required<string>();
  readonly size = input<'sm' | 'md'>('sm');
  readonly ariaLabel = input('');
}
