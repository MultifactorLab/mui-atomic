import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiSlider } from './mui-slider';

describe('MuiSlider', () => {
  let component: MuiSlider;
  let fixture: ComponentFixture<MuiSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuiSlider]
    }).compileComponents();

    fixture = TestBed.createComponent(MuiSlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
