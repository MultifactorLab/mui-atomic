import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiAccordionComponent } from './mui-accordion.component';

describe('MuiAccordionComponent', () => {
  let component: MuiAccordionComponent;
  let fixture: ComponentFixture<MuiAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuiAccordionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuiAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
