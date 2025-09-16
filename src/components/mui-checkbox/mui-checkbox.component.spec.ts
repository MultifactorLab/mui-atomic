import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiCheckboxComponent } from './mui-checkbox.component';

describe('MuiCheckboxComponent', () => {
  let component: MuiCheckboxComponent;
  let fixture: ComponentFixture<MuiCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuiCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuiCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
