import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiInterval } from './mui-interval';

describe('MuiInterval', () => {
  let component: MuiInterval;
  let fixture: ComponentFixture<MuiInterval>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuiInterval]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuiInterval);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
