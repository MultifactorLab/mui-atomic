import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiSearchSelect } from './mui-search-select';

describe('MuiSearchSelect', () => {
  let component: MuiSearchSelect;
  let fixture: ComponentFixture<MuiSearchSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuiSearchSelect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuiSearchSelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
