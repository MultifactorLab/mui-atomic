import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MuiDialogComponent} from './mui-dialog.component';

describe('MuiDialogComponent', () => {
  let component: MuiDialogComponent;
  let fixture: ComponentFixture<MuiDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuiDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
