import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiBadgeComponent } from './mui-badge.component';

describe('MuiBadgeComponent', () => {
  let component: MuiBadgeComponent;
  let fixture: ComponentFixture<MuiBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuiBadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuiBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
