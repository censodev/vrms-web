import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestVcnProfileCardComponent } from './guest-vcn-profile-card.component';

describe('GuestVcnProfileCardComponent', () => {
  let component: GuestVcnProfileCardComponent;
  let fixture: ComponentFixture<GuestVcnProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestVcnProfileCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestVcnProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
