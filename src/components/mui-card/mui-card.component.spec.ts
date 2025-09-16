import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiCardComponent } from './mui-card.component';

describe('MuiCardComponent', () => {
  let component: MuiCardComponent;
  let fixture: ComponentFixture<MuiCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuiCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
