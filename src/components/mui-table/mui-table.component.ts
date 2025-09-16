import { Component, Input } from '@angular/core';

@Component({
  selector: 'mui-table',
  standalone: true,
  templateUrl: './mui-table.component.html',
  imports: [],
  styleUrl: './mui-table.component.scss',
})
export class MuiTableComponent {
  @Input() dataLength = 0;
}
