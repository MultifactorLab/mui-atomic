import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MuiTableRowComponent } from '../mui-table-row/mui-table-row.component';
import { MuiTableColumnDefinition } from '../mui-table/mui-table.config';

@Component({
  selector: 'mui-table-head',
  templateUrl: './mui-table-head.component.html',
  imports: [MuiTableRowComponent],
  styleUrl: './mui-table-head.component.scss'
})
export class MuiTableHeadComponent {
  @Input() columns: MuiTableColumnDefinition[] = [];
  @Input() hasAccordionInTable: boolean = false;
  @Output() onCellClick: EventEmitter<any> = new EventEmitter();
}
