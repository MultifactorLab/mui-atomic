import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiTableBodyComponent } from './mui-table-body.component';

describe('MuiTableBodyComponent', () => {
  let component: MuiTableBodyComponent;
  let fixture: ComponentFixture<MuiTableBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuiTableBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuiTableBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
