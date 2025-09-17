import { ChangeDetectionStrategy, Component, ElementRef, HostListener, input, signal, ViewChild } from '@angular/core';
import {ChevronMuiIconComponent} from '../mui-icon';

@Component({
  selector: 'mui-accordion',
  standalone: true,
  imports: [ChevronMuiIconComponent],
  templateUrl: './mui-accordion.component.html',
  styleUrl: './mui-accordion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MuiAccordionComponent {
  title = input<string>('');
  protected opened = signal<boolean>(false);

  @ViewChild('panel') protected panel: ElementRef<HTMLDivElement> | null = null;

  @HostListener('click') onClick() {
    this.opened.update(prev => !prev);

    if (this.panel) {
      const panel = this.panel.nativeElement;
      this.opened() ? (panel.style.maxHeight = panel.scrollHeight + 'px') : (panel.style.maxHeight = '0');
    }
  }
}
