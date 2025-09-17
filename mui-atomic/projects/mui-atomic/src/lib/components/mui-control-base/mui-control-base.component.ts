import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  template: ``,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MuiControlBaseComponent<T> implements ControlValueAccessor, OnDestroy {
  @Input() disabled: boolean = false;
  @Output() blur = new EventEmitter<void>();
  @Output() focus = new EventEmitter<void>();
  unsubscribe = new Subject<boolean>();
  _controlAccessor: NgControl | null = null;
  _controlError: string | null = null;
  get error(): string {
    return this._controlError || '';
  }
  get controlAccessor(): NgControl | null {
    return this._controlAccessor;
  }
  set controlAccessor(ca: NgControl | null) {
    this._controlAccessor = ca;
    this.cdr.detectChanges();
  }

  constructor(protected cdr: ChangeDetectorRef) {
  }

  innerValue: T | undefined;

  get value(): T | undefined {
    return this.innerValue;
  }

  set value(v: T) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this._onChange(v);
    }
  }

  protected _onChange = (value: T) => {};
  protected _onTouched = () => {};

  writeValue(value: T): void {
    if (value !== this.innerValue) {
      this.innerValue = value;
      this.cdr.detectChanges();
    }
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.detectChanges();
  }

  setError(error: string | null): void {
    this._controlError = error;
  }

  clearError() {
    this.setError(null);
  }

  onBlur() {
    this.blur.next();
    this._onTouched();
    this.cdr.detectChanges();
  }

  onFocus() {
    this.focus.next();
  }

  setFocus() {}

  ngOnDestroy(): void {
    this.unsubscribe.next(true);
    this.unsubscribe.complete();
  }
}
