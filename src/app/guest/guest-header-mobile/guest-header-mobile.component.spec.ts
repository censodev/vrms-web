import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestHeaderMobileComponent } from './guest-header-mobile.component';

describe('GuestHeaderMobileComponent', () => {
  let component: GuestHeaderMobileComponent;
  let fixture: ComponentFixture<GuestHeaderMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestHeaderMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestHeaderMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
