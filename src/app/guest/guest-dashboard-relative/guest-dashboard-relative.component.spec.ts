import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestDashboardRelativeComponent } from './guest-dashboard-relative.component';

describe('GuestDashboardRelativeComponent', () => {
  let component: GuestDashboardRelativeComponent;
  let fixture: ComponentFixture<GuestDashboardRelativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestDashboardRelativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestDashboardRelativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
