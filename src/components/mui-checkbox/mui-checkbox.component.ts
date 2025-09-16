import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mui-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './mui-checkbox.component.html',
  styleUrl: './mui-checkbox.component.scss',
})
export class MuiCheckboxComponent {
  @Input() label: string = '';
  @Input() checked: boolean = false;

  // TODO: добавить обработку состояния disabled

  @Output() checkedChange = new EventEmitter<boolean>();

  onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.checked = target.checked;
    this.checkedChange.emit(this.checked);
  }
}
