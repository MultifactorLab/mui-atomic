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
export class MuiInterval extends MuiControlBaseComponent<string> {
  id = input.required<string>();
  label = input<string>('');
  size = input<IntervalSize>('S');
  fill = input<IntervalFill>('filled');

  private inputEl = viewChild.required<ElementRef<HTMLInputElement>>('inputEl');

  constructor() {
    super();

    effect(() => {
      if (this.inputEl()) {
        this.inputEl().nativeElement.value = this.value ?? '';
      }
    });
  }

  public onInput(event: Event): void {
    const newValue = (event.target as HTMLInputElement).value;
    this.value = newValue;
    this._onChange(newValue);
  }
}
