import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NextMuiIconComponent } from '../mui-icon/items/next.mui-icon';
import { PrevMuiIconComponent } from '../mui-icon/items/prev.mui-icon';
import { MuiSelectableItem } from '../mui-select-option/mui-selectable-item';
import { MuiSelectComponent } from '../mui-select/mui-select.component';
import { PagedData } from './paged-data';

export type PaginationSettings = {
  pagination: PagedData;
  totalPages: number;
  totalCount: number;
  pageSizes: MuiSelectableItem[];
};

@Component({
  selector: 'mui-pagination',
  templateUrl: './mui-pagination.component.html',
  imports: [PrevMuiIconComponent, NextMuiIconComponent, MuiSelectComponent],
  styleUrl: './mui-pagination.component.scss'
})
export class MuiPaginationComponent implements OnInit {
  @Input() totalPages = 0;
  @Input() totalItems = 0;
  @Input() pageSize: number = 5;
  @Input() pageSizes: MuiSelectableItem[] = [
    new MuiSelectableItem('5'),
    new MuiSelectableItem('10'),
    new MuiSelectableItem('25'),
    new MuiSelectableItem('50'),
    new MuiSelectableItem('100')
  ];

  @Input() set currentPage(value: number) {
    if (value <= this.totalPages) {
      this._currentPage = Math.max(1, value);
    }
  }

  get currentPage(): number {
    return this._currentPage;
  }

  @Output() pageSizeChange = new EventEmitter<number>();
  @Output() onChangePage = new EventEmitter<PagedData>();

  protected _currentPage = 1;
  protected currentPageSize = this.pageSize;

  ngOnInit() {
    this.currentPageSize = this.pageSize;
  }

  get defaultPageSize(): MuiSelectableItem {
    return this.pageSizes.find(p => Number(p.title) === this.pageSize) ?? this.pageSizes[0];
  }

  goNextPage() {
    if (this.currentPage < this.totalPages) {
      this._currentPage++;
      this.emitPageChange();
    }
  }

  goPrevPage() {
    if (this.currentPage > 1) {
      this._currentPage--;
      this.emitPageChange();
    }
  }

  setPageSize(value: MuiSelectableItem) {
    this.currentPageSize = Number(value.title);
    this.pageSize = this.currentPageSize;
    this.pageSizeChange.emit(this.currentPageSize);
    this._currentPage = 1;
    this.emitPageChange();
  }

  private emitPageChange() {
    this.onChangePage.emit(new PagedData(this.totalItems, this.totalPages, this.currentPage, this.currentPageSize));
  }
}
