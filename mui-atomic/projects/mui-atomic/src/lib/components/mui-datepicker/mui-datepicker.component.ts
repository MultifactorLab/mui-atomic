import {ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, Output, ViewChild} from '@angular/core';
import {MuiControlBaseComponent} from '../mui-control-base/mui-control-base.component';
import {FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import moment from 'moment';
import 'moment/locale/ru';

@Component({
  selector: 'mui-datepicker',
  standalone: true,
  templateUrl: './mui-datepicker.component.html',
  styleUrl: './mui-datepicker.component.scss',
  imports: [
    FormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MuiDatepickerComponent),
      multi: true,
    },
  ]
})
export class MuiDatepickerComponent extends MuiControlBaseComponent<string> {

  @ViewChild('input') datePickerInput!: HTMLInputElement;
  @Input() placeholder: string | undefined;
  @Input() name: string = '';
  @Input() format: 'YYYY-MM-DD' | 'DD.MM.YYYY' = 'YYYY-MM-DD';

  @Output() onDateChange = new EventEmitter<string>();
  _momentInternal?: moment.Moment;
  readonly _internalMin = moment('1970-01-01', 'YYYY-MM-DD', 'ru', true);
  readonly _internalMax = moment('2999-12-31', 'YYYY-MM-DD', 'ru', true);

  constructor(cdr: ChangeDetectorRef) {
    super(cdr);
  }

  onChange(): void {
    this._setInternalMoment();

    if (this.isValidDate) {
      this.clearError();
      this.onDateChange.emit(
        this._momentInternal?.format(this.format)
      )
    } else {
      this.setError('Введите правильную дату');
    }

  }

  private _setInternalMoment() {
    this._momentInternal = this.value ? moment(this.value, this.format, 'ru', true) : undefined;
  }

  private get isValidDate(): boolean {
    if (!this._momentInternal) {
      return true;
    }
    if (this._momentInternal.isBefore(this._internalMin) || this._momentInternal.isAfter(this._internalMax)) {
      return false;
    }
    return this._momentInternal.isValid();
  }

  override onBlur() {
    if (this.isValidDate) {
      this.clearError();
    } else {
      this.setError('Введите правильную дату');
    }
  }
}
