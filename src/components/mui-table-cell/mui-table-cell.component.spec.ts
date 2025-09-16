import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiTableCellComponent } from './mui-table-cell.component';

describe('MuiTableCellComponent', () => {
  let component: MuiTableCellComponent;
  let fixture: ComponentFixture<MuiTableCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuiTableCellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuiTableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
