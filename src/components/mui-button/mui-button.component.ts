import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'mui-button',
  imports: [
    NgClass
  ],
  standalone: true,
  templateUrl: './mui-button.component.html',
  styleUrl: './mui-button.component.scss'
})
export class MuiButtonComponent {
  @Input() buttonStyle: 'cta' | 'primary' | 'secondary' | 'outline' | 'alert' = 'primary';
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full-width' = 'md';
  @Input() height: 'normal' | 'as-control' = 'normal';
}
