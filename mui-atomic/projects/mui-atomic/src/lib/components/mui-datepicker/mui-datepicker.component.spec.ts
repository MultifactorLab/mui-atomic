import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiDatepickerComponent } from './mui-datepicker.component';

describe('MuiDatepickerComponent', () => {
  let component: MuiDatepickerComponent;
  let fixture: ComponentFixture<MuiDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuiDatepickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuiDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
