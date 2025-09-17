export class MuiSelectableItem {
  constructor(
    public title?: string,
    public selected?: boolean,
    public id = Date.now().toString(36) + Math.random().toString(36).substr(2)
  ) {}
}
