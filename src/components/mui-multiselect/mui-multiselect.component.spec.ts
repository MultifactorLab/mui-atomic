import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiMultiselectComponent } from './mui-multiselect.component';

describe('MuiMultiselectComponent', () => {
  let component: MuiMultiselectComponent;
  let fixture: ComponentFixture<MuiMultiselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuiMultiselectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuiMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
