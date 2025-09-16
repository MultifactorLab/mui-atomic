import {MuiTableCell} from '../mui-table-cell/mui-table-cell';

export class BaseColumnDefinition {
  constructor(
    /**
     * Текст заголовка столбца
     */
    public title?: string,
    /**
     * Значение maxWidth, в пикселях
     */
    public maxWidth?: string,
    /**
     * Значение minWidth, в пикселях
     */
    public minWidth?: string
  ) {}
}

export class MuiTableColumnDefinition extends BaseColumnDefinition {
  constructor(
    /**
     * Имя свойства в модели, по которому должно быть получено значение в ячейке
     */
    public modelName?: string,
    title?: string,
    maxWidth?: string,
    minWidth?: string
  ) {
    super(title, maxWidth, minWidth);
  }
}

export class MuiTableResolvableColumnDefinition extends MuiTableColumnDefinition {
  constructor(
    public cellFactory: (value: string) => MuiTableCell,
    modelName?: string,
    title?: string,
    maxWidth?: string,
    minWidth?: string
  ) {
    super(modelName, title, maxWidth, minWidth);
  }
}

export class MuiTableIndexColumnDefinition extends BaseColumnDefinition {
  constructor(
    title?: string,
    maxWidth?: string,
    minWidth?: string
  ) {
    super(title, maxWidth, minWidth);
  }
}
