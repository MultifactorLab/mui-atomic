import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchMuiIconComponent } from '../mui-icon/items/search.mui-icon';
import { MuiTextboxComponent } from '../mui-textbox/mui-textbox.component';

@Component({
  selector: 'mui-search',
  standalone: true,
  templateUrl: './mui-search.component.html',
  styleUrl: './mui-search.component.scss',
  imports: [MuiTextboxComponent, FormsModule, SearchMuiIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MuiSearchComponent {
  // TODO: name не используется
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
