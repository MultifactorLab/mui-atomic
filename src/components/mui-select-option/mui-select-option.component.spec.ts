import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiSelectOptionComponent } from './mui-select-option.component';

describe('MuiSelectOptionComponent', () => {
  let component: MuiSelectOptionComponent;
  let fixture: ComponentFixture<MuiSelectOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuiSelectOptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuiSelectOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
