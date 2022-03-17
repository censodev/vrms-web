import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestVcnProfileFormComponent } from './guest-vcn-profile-form.component';

describe('GuestVcnProfileFormComponent', () => {
  let component: GuestVcnProfileFormComponent;
  let fixture: ComponentFixture<GuestVcnProfileFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestVcnProfileFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestVcnProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
