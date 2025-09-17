import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiSvgIconComponentComponent } from './mui-svg-icon-component.component';

describe('MuiSvgIconComponentComponent', () => {
  let component: MuiSvgIconComponentComponent;
  let fixture: ComponentFixture<MuiSvgIconComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuiSvgIconComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuiSvgIconComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
