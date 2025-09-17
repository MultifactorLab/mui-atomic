import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[muiAccordion]',
  standalone: true
})
export class MuiAccordionDirective {
  expanded = false;

  @HostListener('click', ['$event'])
  toggle(event: MouseEvent | TouchEvent): void {
    event.stopPropagation();
    this.expanded = !this.expanded;
  }
}
