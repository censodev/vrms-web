import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestVcnProfileDetailComponent } from './guest-vcn-profile-detail.component';

describe('GuestVcnProfileDetailComponent', () => {
  let component: GuestVcnProfileDetailComponent;
  let fixture: ComponentFixture<GuestVcnProfileDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestVcnProfileDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestVcnProfileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
