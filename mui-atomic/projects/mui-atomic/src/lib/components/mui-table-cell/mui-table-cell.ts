export type CellType = 'text' | 'badge' | 'sort';
export type SortDirection = 'descending' | 'ascending';

export class MuiTableCell {
  constructor(
    public content?: string,
    public type: CellType = 'text',
    public id = Date.now().toString(36) + Math.random().toString(36).substr(2)
  ) {}
}

export class MuiBadgeTableCell extends MuiTableCell {
  constructor(
    public badgeStyle?: 'red' | 'green' | 'yellow' | 'blue',
    content?: string
  ) {
    super(content, 'badge');
  }
}

export class MuiSortTableCell extends MuiTableCell {
  constructor(
    public sortDirection: SortDirection = 'ascending',
    content?: string
  ) {
    super(content, 'sort');
  }

  changeDirection() {
    this.sortDirection = this.sortDirection === 'ascending' ? 'descending' : 'ascending';
  }
}
