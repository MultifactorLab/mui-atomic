import {Component, Input} from '@angular/core';
import {MuiTableColumnDefinition} from '../mui-table/mui-table.config';
import {MuiTableRowComponent} from '../mui-table-row/mui-table-row.component';

@Component({
  selector: 'mui-table-head',
  standalone: true,
  templateUrl: './mui-table-head.component.html',
  imports: [
    MuiTableRowComponent
  ],
  styleUrl: './mui-table-head.component.scss'
})
export class MuiTableHeadComponent {
  @Input() columns: MuiTableColumnDefinition[] = [];
}
