import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiTableComponent } from './mui-table.component';

describe('MuiTableComponent', () => {
  let component: MuiTableComponent;
  let fixture: ComponentFixture<MuiTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuiTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
