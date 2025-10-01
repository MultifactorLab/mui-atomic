import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  HostListener,
  input,
  model,
  OnDestroy,
  OnInit,
  output,
  signal,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { filter, fromEvent, Subject, takeUntil } from 'rxjs';
import { ChevronMuiIconComponent } from '../mui-icon';
import { MuiLoader } from '../mui-loader/mui-loader';
import { MuiSearchComponent } from '../mui-search/mui-search.component';
import { MuiSelectOptionComponent } from '../mui-select-option/mui-select-option.component';
import { MuiSelectableItem } from '../mui-select-option/mui-selectable-item';

@Component({
  selector: 'mui-search-select',
  standalone: true,
  imports: [MuiSelectOptionComponent, MuiSearchComponent, ChevronMuiIconComponent, MuiLoader],
  templateUrl: './mui-search-select.html',
  styleUrl: './mui-search-select.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MuiSearchSelect implements OnInit, OnDestroy {
  title = input<string>('');
  searching = input<boolean>(false);
  optionsTitle = input<string>('');
  options = model<MuiSelectableItem[]>([]);
  searchOptions = model<MuiSelectableItem[]>([]);
  onOptionChange = output<MuiSelectableItem[]>();
  onSearchChange = output<string>();

  protected value = '';
  protected selectedOptions = signal<MuiSelectableItem[]>([]);
  protected panelOpened = signal<boolean>(false);
  protected searchEmpty = false;
  protected selectMenuVisible = computed(() => this.panelOpened() && (this.options().length > 0 || this.searchOptions().length > 0));
  protected dropdownButtonVisible = computed(() => (this.options().length > 0 || this.searchOptions().length > 0) && !this.searching());
  private unsubscribe: Subject<void> = new Subject<void>();

  @ViewChild('selectContainer') private panelContainer: ElementRef<HTMLDivElement> | null = null;

  ngOnInit() {
    this.detectCloseOnOutsideClick();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscHandler(event: KeyboardEvent) {
    this.panelOpened.set(false);
    event.stopPropagation();
  }

  get placeholder(): string {
    let res = '';

    this.selectedOptions().forEach(option => (res += `${option.title}, `));

    const normalized = res.endsWith(', ') ? res.slice(0, -2) : res;
    return normalized.length > 0 ? normalized : 'Поиск';
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
      this.selectedOptions.update(prev => [...prev, item]);
    } else {
      this.selectedOptions.update(prev => prev.filter(i => i.id !== item.id));
    }

    this.sortOptions();
    this.onOptionChange.emit(this.selectedOptions());
  }

  protected sortOptions() {
    const sortSelected = (a: MuiSelectableItem, b: MuiSelectableItem) => {
      if (a.selected === b.selected) return 0;
      return a.selected ? -1 : 1;
    };

    //TODO: Добавить анимацию всплытия для соритровки
    this.options.update(prev => prev.sort(sortSelected));
    this.searchOptions.update(prev => prev.sort(sortSelected));
  }

  private elementIsOutside(e: Event): boolean {
    const target = e.target;

    if (target && target instanceof HTMLElement) {
      const classBlocklist = ['select-option', 'select-option-content'];

      if (target.localName === 'select') {
        return false;
      }

      if (target.closest('.options-list-container')) {
        return false;
      }

      if (target.closest('.search-wrapper')) {
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

  protected handleSearchValueChanged(searchValue: string) {
    this.searchEmpty = searchValue.trim().length === 0;
    this.onSearchChange.emit(searchValue);
    this.panelOpened.set(!this.searchEmpty);
  }
}
