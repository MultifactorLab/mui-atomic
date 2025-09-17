import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiTableRowComponent } from './mui-table-row.component';

describe('MuiTableRowComponent', () => {
  let component: MuiTableRowComponent;
  let fixture: ComponentFixture<MuiTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuiTableRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuiTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
