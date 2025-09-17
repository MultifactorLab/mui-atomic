import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiButtonComponent } from './mui-button.component';

describe('MuiButtonComponent', () => {
  let component: MuiButtonComponent;
  let fixture: ComponentFixture<MuiButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuiButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
