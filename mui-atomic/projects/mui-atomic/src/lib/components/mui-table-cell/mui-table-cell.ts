export type CellType = 'text' | 'badge' | 'sort';
export type SortDirection = 'descending' | 'ascending' | 'none';

export class MuiTableCell {
  constructor(
    public content?: string,
    public type: CellType = 'text',
    public id = Date.now().toString(36) + Math.random().toString(36).substr(2)
  ) {}

  static isTextCell(cell: MuiTableCell): boolean {
    return cell.type === 'text';
  }

  static isBadgeCell(cell: MuiTableCell): cell is MuiBadgeTableCell {
    return cell.type === 'badge';
  }

  static isSortCell(cell: MuiTableCell): cell is MuiSortTableCell {
    return cell.type === 'sort';
  }
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
    public sortDirection: SortDirection = 'none',
    content?: string
  ) {
    super(content, 'sort');
  }

  changeDirection() {
    const order: SortDirection[] = ['none', 'descending', 'ascending'];
    const nextIndex = (order.indexOf(this.sortDirection) + 1) % order.length;
    this.sortDirection = order[nextIndex];
  }
}
