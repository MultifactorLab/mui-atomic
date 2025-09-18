import { Injectable, OnDestroy } from '@angular/core';
import { MuiDialogComponent } from 'mui-atomic';
import { Observable, take } from 'rxjs';
import { MuiDialogParams } from '../components/mui-dialog/mui-dialog.params';
import { MuiDialogResult } from '../components/mui-dialog/mui-dialog.types';

@Injectable({
  providedIn: 'root'
})
export class MuiDialogService implements OnDestroy {
  private _instance: MuiDialogComponent<any> | null = null;

  private assertDialogInstance(instance: MuiDialogComponent<any> | null) {
    if (!instance) {
      throw Error('MuiDialog instance must be defined');
    }
  }

  private _setParams(params: MuiDialogParams<any>) {
    this.assertDialogInstance(this._instance);
    this._instance!.title = params.title;
    this._instance!.showCloseButton = params.showCloseButton;
    this._instance!.maxWidth = params.maxWidth;
    this._instance!.component = params.component;
  }

  attach(instance: MuiDialogComponent<any>) {
    this.assertDialogInstance(instance);
    this._instance = instance;
  }

  detach(): void {
    if (this._instance?.isOpened) {
      this._instance.close();
    }
    this._instance = null;
  }

  open(params: MuiDialogParams<any>): void {
    this._setParams(params);
    this._instance!.open();
  }

  get dialogResult(): Observable<MuiDialogResult> {
    return this._instance!.result.pipe(take(1));
  }

  ngOnDestroy() {
    this.detach();
  }
}
