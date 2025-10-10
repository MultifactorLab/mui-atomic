import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  input,
  OnChanges,
  QueryList,
  signal,
  TemplateRef,
  ViewChild,
  ViewChildren
} from '@angular/core';

export type TabItem = {
  id: string;
  label: string;
  disabled: boolean;
  template: TemplateRef<any>;
};

@Component({
  selector: 'mui-tabs',
  imports: [NgTemplateOutlet],
  templateUrl: './mui-tabs.component.html',
  styleUrl: './mui-tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MuiTabsComponent implements OnChanges {
  tabs = input<TabItem[]>([]);
  protected activeTabId = signal<string | null>(null);

  @ViewChild('underline', { static: true }) underline: ElementRef<HTMLDivElement> | null = null;
  @ViewChildren('tabButton') tabButtons: QueryList<ElementRef<HTMLButtonElement>> | null = null;

  constructor() {
    effect(() => {
      const activeId = this.activeTabId();
      if (!activeId) return;

      Promise.resolve().then(() => this.updateUnderline());
    });
  }

  ngOnChanges() {
    const tabs = this.tabs();

    if (tabs.length > 0 && !this.activeTabId()) {
      this.activeTabId.set(tabs[0].id);
    }
  }

  protected selectTab(id: string) {
    this.activeTabId.set(id);
  }

  protected isActive(id: string): boolean {
    return this.activeTabId() === id;
  }

  private updateUnderline() {
    if (this.tabButtons) {
      const activeButton = this.tabButtons.find(btn => btn.nativeElement.getAttribute('aria-selected') === 'true');

      if (activeButton && this.underline) {
        const el = activeButton.nativeElement;
        const rect = el.getBoundingClientRect();
        const parentRect = el.offsetParent?.getBoundingClientRect();
        if (!parentRect) return;

        this.underline.nativeElement.style.width = `${rect.width}px`;
        this.underline.nativeElement.style.left = `${rect.left - parentRect.left}px`;
      }
    }
  }
}
