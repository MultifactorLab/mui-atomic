export class MuiTableCell {
  constructor(
    public content?: string,
    public type: 'text' | 'badge' = 'text',
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
