import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MuiTableCellComponent } from '../mui-table-cell/mui-table-cell.component';
import { MuiTableColumnDefinition, MuiTableIndexColumnDefinition, MuiTableResolvableColumnDefinition } from '../mui-table/mui-table.config';
import { NgStyle, NgClass } from '@angular/common';
import { MuiBadgeTableCell, MuiTableCell } from '../mui-table-cell/mui-table-cell';
import { MuiBadgeComponent } from '../mui-badge/mui-badge.component';

export type RowIndex = {
  prefix: number;
  postfix?: string;
};

export type NestedLevel = 0 | 1 | 2;

@Component({
  selector: 'mui-table-row',
  standalone: true,
  templateUrl: './mui-table-row.component.html',
  imports: [MuiTableCellComponent, NgStyle, MuiBadgeComponent, NgClass],
  styleUrl: './mui-table-row.component.scss',
})
export class MuiTableRowComponent implements OnInit {
  @Input() source!: any;
  @Input() isHeaderRow = false;
  @Input() rowIndex: RowIndex = { prefix: 0 };
  @Input() itemsOnPage: number = 0;
  @Input() currentPage: number = 1;
  @Input() columnConfig: MuiTableColumnDefinition[] = [];
  @Input() nestedLevel: NestedLevel = 0;

  private readonly levelClassMap: Record<NestedLevel, string> = {
    0: '',
    1: 'nested-level-1',
    2: 'nested-level-2',
  };

  @Output() onRowClick: EventEmitter<any> = new EventEmitter();

  protected cells: MuiTableCell[] = [];

  ngOnInit() {
    if (this.isHeaderRow) {
      this.cells = this.columnConfig.map(x => new MuiTableCell(x.title!));
    } else {
      const length = this.columnConfig.length;
      for (let i = 0; i < length; i++) {
        const columnDef = this.columnConfig[i];

        if (columnDef instanceof MuiTableIndexColumnDefinition) {
          const index = this.getPageIndex();
          this.setCell(index.toString());
          continue;
        }
        if (columnDef instanceof MuiTableResolvableColumnDefinition) {
          this.setFactoryValueCell(columnDef);
          continue;
        }
        const modelName = this.columnConfig[i].modelName!;
        this.setCell(this.source[modelName]);
      }
    }
  }

  get nestedLevelClass(): string {
    return this.levelClassMap[this.nestedLevel] || '';
  }

  private setFactoryValueCell(columnDef: MuiTableResolvableColumnDefinition) {
    const modelName = columnDef.modelName!;
    const val = this.source[modelName];
    const factoryVal = (columnDef.cellFactory && columnDef.cellFactory(val)) || new MuiTableCell('');
    this.cells.push(factoryVal);
  }

  private setCell(value: string) {
    const cellContent = new MuiTableCell(value);
    this.cells.push(cellContent);
  }

  isTextCell(cell: MuiTableCell): boolean {
    return cell.type === 'text';
  }

  isBadgeCell(cell: MuiTableCell): boolean {
    return cell.type === 'badge';
  }

  getBadgeCellStyle(cell: MuiBadgeTableCell) {
    return cell.badgeStyle;
  }

  private getPageIndex() {
    const decimal = (this.currentPage - 1) * this.itemsOnPage;
    const normalizedIndex = this.rowIndex.prefix + 1;
    const itemNumber = normalizedIndex === this.itemsOnPage ? normalizedIndex : normalizedIndex % this.itemsOnPage;
    const pageIndex = decimal + itemNumber;

    return this.rowIndex.postfix ? `${pageIndex}${this.rowIndex.postfix}` : pageIndex;
  }
}
