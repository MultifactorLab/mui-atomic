import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiExpandComponent } from './mui-expand.component';

describe('MuiExpandComponent', () => {
  let component: MuiExpandComponent;
  let fixture: ComponentFixture<MuiExpandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuiExpandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuiExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
