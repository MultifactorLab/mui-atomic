import {ChangeDetectorRef, Component, forwardRef, Input} from '@angular/core';
import {FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
import {MuiControlBaseComponent} from '../mui-control-base/mui-control-base.component';
import {NgClass} from '@angular/common';

@Component({
  standalone: true,
  selector: 'mui-textbox',
  imports: [
    FormsModule,
    NgClass
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MuiTextboxComponent),
      multi: true,
    },
  ],
  templateUrl: './mui-textbox.component.html',
  styleUrl: './mui-textbox.component.scss'
})
export class MuiTextboxComponent extends MuiControlBaseComponent<string> {
  @Input() padding: 'normal' | 'with-icon' = 'normal';
  @Input() placeholder: string | undefined;
  @Input() name: string = '';
  @Input() placeholderOnTop = false;

  constructor(cdr: ChangeDetectorRef) {
    super(cdr);
  }

}
