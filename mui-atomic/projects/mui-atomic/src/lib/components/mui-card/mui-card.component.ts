import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'mui-card',
  imports: [NgClass],
  templateUrl: './mui-card.component.html',
  styleUrl: './mui-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MuiCardComponent {
  @Input() background: 'dark' | 'light' | 'empty' = 'empty';
  @Input() shadow: boolean = false;
}
