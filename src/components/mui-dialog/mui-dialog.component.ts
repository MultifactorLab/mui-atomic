import { Component } from '@angular/core';
import {NgComponentOutlet, NgStyle} from '@angular/common';
import {CloseMuiIconComponent} from '../mui-icon/items/close.mui-icon';
import {Observable, Subject} from 'rxjs';
import {MuiDialogResult} from './mui-dialog.types';

@Component({
  selector: 'mui-dialog',
  standalone: true,
  templateUrl: './mui-dialog.component.html',
  imports: [
    NgStyle,
    CloseMuiIconComponent,
    NgComponentOutlet
  ],
  styleUrl: './mui-dialog.component.scss'
})
export class MuiDialogComponent<T> {
  showCloseButton = true;
  isOpened = false;
  maxWidth = 0;
  resultFn?: () => MuiDialogResult;
  title?: string = '';
  component: any | null = null;
  private _result = new Subject<MuiDialogResult>();

  open() {
    this.isOpened = true;
  }

  close() {
    this.isOpened = false;
  }

  closeWithResult(result: MuiDialogResult): MuiDialogResult {
    this.isOpened = false;
    return result;
  }

  closeWithResultObservable(result: MuiDialogResult) {
    this.isOpened = false;
    this._result.next(result);
  }

  get result(): Observable<MuiDialogResult> {
    return this._result.asObservable();
  }
}
