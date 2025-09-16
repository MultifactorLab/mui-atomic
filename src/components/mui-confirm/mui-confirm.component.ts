import {Component, Injector} from '@angular/core';
import {MuiButtonComponent} from '../mui-button/mui-button.component';
import {MuiDialogComponent} from '../mui-dialog/mui-dialog.component';

@Component({
  selector: 'mui-confirm',
  standalone: true,
  templateUrl: './mui-confirm.component.html',
  imports: [
    MuiButtonComponent
  ],
  styleUrl: './mui-confirm.component.scss'
})
export class MuiConfirmComponent {
  private readonly _dialogParent: MuiDialogComponent<any> | null = null;
  text?: string;
  acceptButtonText: string = 'Да';
  rejectButtonText: string = 'Нет';
  acceptButtonStyle: 'cta' | 'primary' | 'secondary' | 'outline' | 'alert' = 'primary';
  rejectButtonStyle: 'cta' | 'primary' | 'secondary' | 'outline' | 'alert' = 'outline';

  constructor(private _injector: Injector) {
    this._dialogParent = this._injector.get<MuiDialogComponent<any>>(MuiDialogComponent);
  }

  confirm() {
    this._dialogParent!.closeWithResultObservable(true);
  }

  reject() {
    this._dialogParent!.closeWithResultObservable(false);
  }
}
