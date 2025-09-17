import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiPaginationComponent } from './mui-pagination.component';

describe('MuiPaginationComponent', () => {
  let component: MuiPaginationComponent;
  let fixture: ComponentFixture<MuiPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuiPaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuiPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
