import { ChangeDetectionStrategy, Component, HostListener, input, model, output, ViewEncapsulation } from '@angular/core';
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
  value = model<string>('');
  placeholder = input<string>('Поиск');
  disabled = input<boolean>(false);
  onChange = output<string>();

  @HostListener('keydown.enter') protected onEnterListener() {
    this.onChange.emit(this.value());
  }

  protected onFocusOut() {
    this.onChange.emit(this.value());
  }
}
