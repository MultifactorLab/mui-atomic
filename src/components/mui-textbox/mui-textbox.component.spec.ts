import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiTextboxComponent } from './mui-textbox.component';

describe('MuiTextboxComponent', () => {
  let component: MuiTextboxComponent;
  let fixture: ComponentFixture<MuiTextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuiTextboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuiTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
