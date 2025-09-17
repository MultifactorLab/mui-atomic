import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiSelectComponent } from './mui-select.component';

describe('MuiSelectComponent', () => {
  let component: MuiSelectComponent;
  let fixture: ComponentFixture<MuiSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuiSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
