import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiConfirmComponent } from './mui-confirm.component';

describe('MuiConfirmComponent', () => {
  let component: MuiConfirmComponent;
  let fixture: ComponentFixture<MuiConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuiConfirmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuiConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
