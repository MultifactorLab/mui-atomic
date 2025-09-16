import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MuiSelectOptionComponent } from '../mui-select-option/mui-select-option.component';
import { MuiSelectableItem } from '../mui-select-option/mui-selectable-item';
import { NgClass } from '@angular/common';
import { filter, fromEvent, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'mui-select',
  standalone: true,
  templateUrl: './mui-select.component.html',
  imports: [MuiSelectOptionComponent, NgClass],
  styleUrl: './mui-select.component.scss'
})
export class MuiSelectComponent implements OnInit, OnDestroy {
  isPanelOpened: boolean = false;
  @Input() currentSelectedItem?: MuiSelectableItem;
  @Input() heightStyle: 'normal' | 'half-size' = 'normal';
  @Output() onSelectedItemChange = new EventEmitter<MuiSelectableItem>();
  @Input() title!: string;
  @Input() options: MuiSelectableItem[] = [];

  @ViewChild('selectContainer') private panelContainer: ElementRef<HTMLDivElement> | null = null;

  private unsubscribe: Subject<void> = new Subject<void>();

  ngOnInit() {
    this.detectCloseOnOutsideClick();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  /**
   * Обработка mousedown prevention, для возможности закрывать селект кликом вне него
   */
  detectCloseOnOutsideClick() {
    fromEvent(document, 'click')
      .pipe(filter(this.elementIsOutside), takeUntil(this.unsubscribe))
      .subscribe(() => (this.isPanelOpened = false));
  }

  selectItem(item: MuiSelectableItem) {
    item.selected = !item.selected;
    this.currentSelectedItem = item;
    this.isPanelOpened = false;
    this.onSelectedItemChange.emit(this.currentSelectedItem);
  }

  private elementIsOutside(e: Event): boolean {
    const target = <HTMLElement>e.target!;
    return target.localName !== 'select' && target.localName !== 'mui-select-option';
  }

  protected get showPanelOnTop(): boolean {
    if (this.panelContainer) {
      const element = this.panelContainer.nativeElement;
      return window.innerHeight - element.getBoundingClientRect().bottom < element.scrollHeight;
    }

    return false;
  }
}
