import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, HostListener } from '@angular/core';
import {MuiTextboxComponent} from '../mui-textbox/mui-textbox.component';
import {FormsModule} from '@angular/forms';
import {SearchMuiIconComponent} from '../mui-icon/items/search.mui-icon';

@Component({
  selector: 'mui-search',
  standalone: true,
  templateUrl: './mui-search.component.html',
  styleUrl: './mui-search.component.scss',
  imports: [
    MuiTextboxComponent,
    FormsModule,
    SearchMuiIconComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MuiSearchComponent {
  @Input() name?: string;
  @Output() onChange: EventEmitter<string> = new EventEmitter();
  value: string = '';

  @HostListener('keydown.enter')
  _onEnterListener() {
    this.onChange.emit(this.value);
  }

  onFocusOut() {
    this.onChange.emit(this.value);
  }
}
