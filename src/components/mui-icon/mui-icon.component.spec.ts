import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiIconComponent } from './mui-icon.component';

describe('MuiIconComponent', () => {
  let component: MuiIconComponent;
  let fixture: ComponentFixture<MuiIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuiIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuiIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
