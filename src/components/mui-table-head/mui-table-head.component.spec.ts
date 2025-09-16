import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiTableHeadComponent } from './mui-table-head.component';

describe('MuiTableHeadComponent', () => {
  let component: MuiTableHeadComponent;
  let fixture: ComponentFixture<MuiTableHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuiTableHeadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuiTableHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
