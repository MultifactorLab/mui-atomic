import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  HostListener,
  inject,
  input,
  OnInit,
  output,
  ViewEncapsulation
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { SearchMuiIconComponent } from '../mui-icon/items/search.mui-icon';
import { MuiTextboxComponent } from '../mui-textbox/mui-textbox.component';

type SearchForm = {
  search: FormControl<string>;
};

@Component({
  selector: 'mui-search',
  templateUrl: './mui-search.component.html',
  styleUrl: './mui-search.component.scss',
  imports: [MuiTextboxComponent, ReactiveFormsModule, SearchMuiIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MuiSearchComponent implements OnInit {
  searchDebounce = input<number>(300); //ms
  placeholder = input<string>('Поиск');
  disabled = input<boolean>(false);
  onChange = output<string>();

  protected readonly form = new FormGroup<SearchForm>({
    search: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] })
  });

  protected readonly destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      this.detectDisableState();
    });
  }

  ngOnInit() {
    this.startSearchChangeMonitoring();
  }

  get value(): string {
    return this.form.controls.search.getRawValue();
  }

  @HostListener('keydown.enter') protected onEnterListener() {
    this.onChange.emit(this.value);
  }

  private detectDisableState() {
    const control = this.form.controls.search;

    if (this.disabled() && control.enabled) control.disable({ emitEvent: false });
    if (!this.disabled() && control.disabled) control.enable({ emitEvent: false });
  }

  private startSearchChangeMonitoring() {
    // TODO: На будущее сделать динамическое обновление подписки при изменении searchDebounce.
    this.form.controls.search.valueChanges
      .pipe(debounceTime(this.searchDebounce()), takeUntilDestroyed(this.destroyRef))
      .subscribe(value => this.onChange.emit(value));
  }
}
