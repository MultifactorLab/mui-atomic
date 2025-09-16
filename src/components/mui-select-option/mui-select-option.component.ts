import {Component, Input} from '@angular/core';
import {MuiSelectableItem} from './mui-selectable-item';
import {CheckMuiIconComponent} from '../mui-icon/items/check.mui-icon';

@Component({
  selector: 'mui-select-option',
  standalone: true,
  templateUrl: './mui-select-option.component.html',
  imports: [
    CheckMuiIconComponent
  ],
  styleUrl: './mui-select-option.component.scss'
})
export class MuiSelectOptionComponent {
  @Input() multiselect = false;
  @Input() item!: MuiSelectableItem;
}
