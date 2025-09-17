import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {_iconRepo } from './mui-icon.storage';
import {MuiSvgIconComponent} from '../mui-svg-icon-component/mui-svg-icon-component.component';

@Component({
  selector: 'mui-icon',
  imports: [],
  standalone: true,
  templateUrl: './mui-icon.component.html',
  styleUrl: './mui-icon.component.scss'
})
export class MuiIconComponent implements OnChanges {
  @Input() type: 'article' | 'users' | undefined;
  icon!: MuiSvgIconComponent | undefined;

  ngOnChanges(changes: SimpleChanges) {
    const iconName = changes['type'].currentValue;
    this.icon = _iconRepo.get(iconName);
  }
}
