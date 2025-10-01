import { NgClass } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MuiControlBaseComponent } from '../mui-control-base/mui-control-base.component';

export type InputType = 'text' | 'number' | 'email' | 'search';

@Component({
  standalone: true,
  selector: 'mui-textbox',
  imports: [ReactiveFormsModule, NgClass],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MuiTextboxComponent),
      multi: true
    }
  ],
  templateUrl: './mui-textbox.component.html',
  styleUrl: './mui-textbox.component.scss'
})
export class MuiTextboxComponent extends MuiControlBaseComponent<string> {
  @Input() padding: 'normal' | 'with-icon' = 'normal';
  @Input() placeholder: string | undefined;
  @Input() name: string = '';
  @Input() placeholderOnTop = false;
  @Input() type: InputType = 'text';
  @Input() autocompleted: boolean = false;
  @Input() autofocused: boolean = false;

  get safeValue(): string {
    return this.value ?? '';
  }

  protected onInput(event: Event): void {
    const newValue = (event.target as HTMLInputElement).value;
    this.value = newValue;
  }
}
