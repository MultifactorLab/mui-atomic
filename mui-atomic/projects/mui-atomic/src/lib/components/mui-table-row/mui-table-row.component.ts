import { NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, OnInit, Output, signal, WritableSignal } from '@angular/core';
import { MuiBadgeComponent } from '../mui-badge/mui-badge.component';
import { ChevronMuiIconComponent } from '../mui-icon';
import { MuiBadgeTableCell, MuiTableCell } from '../mui-table-cell/mui-table-cell';
import { MuiTableCellComponent } from '../mui-table-cell/mui-table-cell.component';
import { MuiTableColumnDefinition, MuiTableIndexColumnDefinition, MuiTableResolvableColumnDefinition } from '../mui-table/mui-table.config';

export type RowIndex = {
  prefix: number;
  postfix?: string;
};

export type NestedLevel = 0 | 1 | 2;

@Component({
  selector: 'mui-table-row',
  standalone: true,
  templateUrl: './mui-table-row.component.html',
  imports: [MuiTableCellComponent, NgStyle, MuiBadgeComponent, NgClass, ChevronMuiIconComponent],
  styleUrl: './mui-table-row.component.scss'
})
export class MuiTableRowComponent implements OnInit {
  @Input() canExpand = false;
  @Input() hasAccordionInTable: boolean = false;
  @Input() source!: any;
  @Input() isHeaderRow = false;
  @Input() rowIndex: RowIndex | null = null;
  @Input() itemsOnPage: number = 0;
  @Input() currentPage: number = 1;
  @Input() columnConfig: MuiTableColumnDefinition[] = [];
  @Input() nestedLevel: NestedLevel = 0;
  @Output() onRowClick: EventEmitter<any> = new EventEmitter();

  protected opened: WritableSignal<boolean> = signal<boolean>(false);
  protected cells: MuiTableCell[] = [];
  private readonly levelClassMap: Record<NestedLevel, string> = {
    0: '',
    1: 'nested-level-1',
    2: 'nested-level-2'
  };

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    if (this.canExpand) {
      event.stopPropagation();
      this.opened.update(prev => !prev);
    }
  }

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

  safeGetMaxWidth(index: number) {
    if (this.columnConfig.length - 1 >= index) {
      return this.columnConfig[index];
    }

    return 'unset';
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
    if (this.rowIndex === null) return '';

    const decimal = (this.currentPage - 1) * this.itemsOnPage;
    const normalizedIndex = this.rowIndex.prefix + 1;
    const itemNumber = normalizedIndex === this.itemsOnPage ? normalizedIndex : normalizedIndex % this.itemsOnPage;
    const pageIndex = decimal + itemNumber;

    return this.rowIndex.postfix ? `${pageIndex}${this.rowIndex.postfix}` : pageIndex;
  }

  protected needsMoveFirstCell(cellId: number): boolean {
    const isHeaderWithAccrodionInTable = this.hasAccordionInTable && this.isHeaderRow && cellId === 0;
    const rowNested = this.nestedLevel === 2 && cellId === 0;
    const isAccordionRow = this.hasAccordionInTable && !this.canExpand && cellId === 0;

    return isAccordionRow || isHeaderWithAccrodionInTable || rowNested;
  }
}
