import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { PrevMuiIconComponent } from '../mui-icon/items/prev.mui-icon';
import { NextMuiIconComponent } from '../mui-icon/items/next.mui-icon';
import { MuiSelectComponent } from '../mui-select/mui-select.component';
import { MuiSelectableItem } from '../mui-select-option/mui-selectable-item';
import { PagedData } from '../../../models/dto/paged-data';

export type PaginationSettings = {
  pagination: PagedData;
  totalPages: number;
  totalCount: number;
  pageSizes: MuiSelectableItem[];
};

@Component({
  selector: 'mui-pagination',
  standalone: true,
  templateUrl: './mui-pagination.component.html',
  imports: [PrevMuiIconComponent, NextMuiIconComponent, MuiSelectComponent],
  styleUrl: './mui-pagination.component.scss'
})
export class MuiPaginationComponent implements OnInit {
  @Input() totalPages: number = 0;
  @Input() totalItems: number = 0;
  @Input() pageSizes = [
    new MuiSelectableItem('5', false),
    new MuiSelectableItem('10', false),
    new MuiSelectableItem('25', false),
    new MuiSelectableItem('50', false),
    new MuiSelectableItem('100', false)
  ];

  @Output() onChangePage = new EventEmitter<PagedData>();

  protected currentPage = 1;
  protected defaultPageSize = this.pageSizes[0];
  protected currentPageSize = Number(this.defaultPageSize.title);

  ngOnInit() {
    this.updatePageSize();
  }

  private updatePageSize() {
    this.defaultPageSize = this.pageSizes[0];
    this.currentPageSize = Number(this.defaultPageSize.title);
  }

  goNextPage() {
    if (this.currentPage === this.totalPages) {
      return;
    }
    this.currentPage++;
    this.emitPageChange();
  }

  goPrevPage() {
    if (this.currentPage === 1) {
      return;
    }
    this.currentPage--;
    this.emitPageChange();
  }

  setPageSize(value: MuiSelectableItem) {
    this.currentPageSize = Number(value.title);
    this.emitPageChange();
  }

  emitPageChange() {
    this.onChangePage.emit(new PagedData(this.totalItems, this.totalPages, this.currentPage, this.currentPageSize));
  }
}
