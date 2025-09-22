import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiLoader } from './mui-loader';

describe('MuiLoader', () => {
  let component: MuiLoader;
  let fixture: ComponentFixture<MuiLoader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuiLoader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuiLoader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
