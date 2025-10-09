import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiTabsComponent } from './mui-tabs.component';

describe('MuiTabsComponent', () => {
  let component: MuiTabsComponent;
  let fixture: ComponentFixture<MuiTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuiTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuiTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
