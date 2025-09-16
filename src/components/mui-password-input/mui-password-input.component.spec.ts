import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiPasswordInputComponent } from './mui-password-input.component';

describe('MuiPasswordInputComponent', () => {
  let component: MuiPasswordInputComponent;
  let fixture: ComponentFixture<MuiPasswordInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuiPasswordInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuiPasswordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
