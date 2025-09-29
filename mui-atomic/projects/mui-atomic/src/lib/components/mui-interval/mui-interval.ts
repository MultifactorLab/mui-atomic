import { Component, effect, ElementRef, forwardRef, input, viewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Size } from '../../core/options';
import { MuiControlBaseComponent } from '../mui-control-base/mui-control-base.component';

export type IntervalSize = Extract<Size, 'S' | 'M' | 'L'>;
export type IntervalFill = 'filled' | 'outline';

@Component({
  selector: 'mui-interval',
  imports: [],
  templateUrl: './mui-interval.html',
  styleUrl: './mui-interval.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MuiInterval),
      multi: true
    }
  ]
})
export class MuiInterval extends MuiControlBaseComponent<number> {
  id = input.required<string>();
  label = input<string>('');
  size = input<IntervalSize>('S');
  fill = input<IntervalFill>('filled');
  min = input<number>(0);
  max = input<number>(100);
  valuePrefix = input<string>('');

  private inputEl = viewChild.required<ElementRef<HTMLInputElement>>('inputEl');

  constructor() {
    super();

    effect(() => {
      if (this.inputEl()) {
        this.inputEl().nativeElement.value = (this.value ?? '') + this.valuePrefix();
      }
    });
  }

  onInput(event: Event): void {
    const newValue = (event.target as HTMLInputElement).value;
    const convertedValue = Number(newValue);
    const normalizedValue = isNaN(convertedValue) ? this.min() : convertedValue;

    this.value = normalizedValue;
    this._onChange(normalizedValue);
  }
}
