import { Component, forwardRef, input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Size } from '../../core/options';
import { MuiControlBaseComponent } from '../mui-control-base/mui-control-base.component';

export type IntervalSize = Extract<Size, 'S' | 'M' | 'L'>;

@Component({
  selector: 'mui-slider',
  imports: [],
  templateUrl: './mui-slider.html',
  styleUrl: './mui-slider.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MuiSlider),
      multi: true
    }
  ]
})
export class MuiSlider extends MuiControlBaseComponent<number> {
  id = input.required<string>();
  label = input<string>('');
  size = input<IntervalSize>('S');
  min = input<number>(0);
  max = input<number>(100);
  step = input<number>(1);
  valuePrefix = input<string>('');
  labels = input<string[]>([]);
  showLabels = input<boolean>(false);
  showMinMax = input<boolean>(false);

  get progress(): number {
    const val = this.value ?? this.min();
    const range = this.max() - this.min();
    return range > 0 ? ((val - this.min()) / range) * 100 : 0;
  }

  protected onInput(event: Event): void {
    const newValue = (event.target as HTMLInputElement).value;
    const convertedValue = Number(newValue);
    const normalizedValue = isNaN(convertedValue) ? this.min() : convertedValue;

    this.value = normalizedValue;
    this._onChange(normalizedValue);
  }

  protected getValueWithPrefix(value: string | number): string {
    return `${value}${this.valuePrefix()}`;
  }
}
