export class MuiDialogParams<T> {

  constructor(
    public title: string,
    public showCloseButton: boolean,
    public maxWidth: number,
    public component: T
  ) {
  }
}
