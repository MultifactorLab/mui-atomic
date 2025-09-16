import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiControlBaseComponent } from './mui-control-base.component';

describe('MuiControlBaseComponent', () => {
  let component: MuiControlBaseComponent;
  let fixture: ComponentFixture<MuiControlBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuiControlBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuiControlBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
