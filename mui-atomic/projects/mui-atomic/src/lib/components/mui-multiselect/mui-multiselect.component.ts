import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  input,
  OnDestroy,
  OnInit,
  output,
  signal,
  ViewChild
} from '@angular/core';
import { MuiSelectableItem } from '../mui-select-option/mui-selectable-item';
import { MuiSelectOptionComponent } from '../mui-select-option/mui-select-option.component';
import { filter, fromEvent, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'mui-multiselect',
  standalone: true,
  templateUrl: './mui-multiselect.component.html',
  imports: [MuiSelectOptionComponent],
  styleUrl: './mui-multiselect.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MuiMultiselectComponent implements OnInit, OnDestroy {
  title = input<string>('');
  options = input<MuiSelectableItem[]>([]);
  onOptionChange = output<MuiSelectableItem[]>();

  @ViewChild('selectContainer') private panelContainer: ElementRef<HTMLDivElement> | null = null;

  protected selectedOptions: MuiSelectableItem[] = [];
  protected panelOpened = signal(false);
  protected selectMenuVisible = computed(() => this.panelOpened() && this.options().length > 0);
  private unsubscribe: Subject<void> = new Subject<void>();

  ngOnInit() {
    this.detectCloseOnOutsideClick();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  get placeholder(): string {
    const count = this.selectedOptions.length;

    if (count === 0) {
      return `Выберите из списка`;
    }

    const verb = count === 1 ? ` выбран` : ` выбрано`;
    return `${count}${verb}`;
  }

  protected togglePanelVisibility() {
    this.panelOpened.update(prev => !prev);
  }

  /**
   * Обработка mousedown prevention, для возможности закрывать селект кликом вне него
   */
  protected detectCloseOnOutsideClick() {
    fromEvent(document, 'click')
      .pipe(filter(this.elementIsOutside), takeUntil(this.unsubscribe))
      .subscribe(() => this.panelOpened.set(false));
  }

  protected selectItem(item: MuiSelectableItem) {
    item.selected = !item.selected;

    if (item.selected) {
      this.selectedOptions.push(item);
    } else {
      this.selectedOptions = this.selectedOptions.filter(i => i.id !== item.id);
    }

    this.onOptionChange.emit(this.selectedOptions);
  }

  private elementIsOutside(e: Event): boolean {
    const target = e.target;

    if (target && target instanceof HTMLElement) {
      const classBlocklist = ['select-option', 'select-option-content'];

      if (target.localName === 'select') {
        return false;
      }

      return target.localName !== 'mui-select-option' && !classBlocklist.some(cls => target.classList.contains(cls));
    }

    return false;
  }

  protected get showPanelOnTop(): boolean {
    if (this.panelContainer) {
      const element = this.panelContainer.nativeElement;
      return window.innerHeight - element.getBoundingClientRect().bottom < element.scrollHeight;
    }

    return false;
  }
}
