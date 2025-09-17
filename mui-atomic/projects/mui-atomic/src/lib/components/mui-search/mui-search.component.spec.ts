import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiSearchComponent } from './mui-search.component';

describe('MuiSearchComponent', () => {
  let component: MuiSearchComponent;
  let fixture: ComponentFixture<MuiSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuiSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuiSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
