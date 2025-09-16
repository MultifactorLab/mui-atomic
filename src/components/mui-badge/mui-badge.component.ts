import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'mui-badge',
  standalone: true,
  templateUrl: './mui-badge.component.html',
  imports: [
    NgClass
  ],
  styleUrl: './mui-badge.component.scss'
})
export class MuiBadgeComponent {
  @Input() style?: 'red' | 'yellow' | 'green' | 'blue';
  @Input() text = '';
}
