import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiRowComponent } from './mui-row.component';

describe('MuiRowComponent', () => {
  let component: MuiRowComponent;
  let fixture: ComponentFixture<MuiRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuiRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuiRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
