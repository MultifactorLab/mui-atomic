import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, fromEvent } from 'rxjs';
import { MuiSelectOptionComponent } from '../mui-select-option/mui-select-option.component';
import { MuiSelectableItem } from '../mui-select-option/mui-selectable-item';

@Component({
  selector: 'mui-select',
  templateUrl: './mui-select.component.html',
  imports: [MuiSelectOptionComponent, NgClass],
  styleUrl: './mui-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MuiSelectComponent implements OnInit {
  @Input() currentSelectedItem?: MuiSelectableItem;
  @Input() heightStyle: 'normal' | 'half-size' = 'normal';
  @Input() title: string = '';
  @Input() options: MuiSelectableItem[] = [];

  @Output() onSelectedItemChange = new EventEmitter<MuiSelectableItem>();

  @ViewChild('selectContainer') private panelContainer: ElementRef<HTMLDivElement> | null = null;

  protected panelOpened: boolean = false;
  protected panelOnTop: boolean = false;

  protected readonly cdr = inject(ChangeDetectorRef);
  protected readonly destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.detectCloseOnOutsideClick();
  }

  /**
   * Обработка mousedown prevention, для возможности закрывать селект кликом вне него
   */
  detectCloseOnOutsideClick() {
    fromEvent(document, 'click')
      .pipe(filter(this.elementIsOutside), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.panelOpened = false;
        this.cdr.markForCheck();
      });
  }

  selectItem(item: MuiSelectableItem) {
    item.selected = !item.selected;
    this.currentSelectedItem = item;
    this.panelOpened = false;
    this.onSelectedItemChange.emit(this.currentSelectedItem);
  }

  private elementIsOutside(e: Event): boolean {
    const target = <HTMLElement>e.target!;
    return target.localName !== 'select' && target.localName !== 'mui-select-option';
  }

  private calcPanelPlace() {
    if (this.panelContainer) {
      const element = this.panelContainer.nativeElement;
      this.panelOnTop = window.innerHeight - element.getBoundingClientRect().bottom < element.scrollHeight;
    } else {
      this.panelOnTop = false;
    }

    this.cdr.markForCheck();
  }

  protected changePanelVisibility() {
    this.panelOpened = !this.panelOpened;

    if (this.panelOpened) {
      this.calcPanelPlace();
    }
  }
}
