import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'mui-card',
  standalone: true,
  imports: [
    NgStyle,
    NgClass
  ],
  templateUrl: './mui-card.component.html',
  styleUrl: './mui-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MuiCardComponent {
  @Input() maxWidth: string = '0';
  @Input() background: 'dark' | 'light' | 'empty' = 'empty';
}
