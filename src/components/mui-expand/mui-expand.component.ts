import { Component, Host } from '@angular/core';
import { MuiAccordionDirective } from '../directives/mui-accordion.directive';

@Component({
  selector: 'mui-expand',
  standalone: true,
  imports: [],
  templateUrl: './mui-expand.component.html',
  styleUrl: './mui-expand.component.scss'
})
export class MuiExpandComponent {
  constructor(@Host() public accordion: MuiAccordionDirective) { }
}
