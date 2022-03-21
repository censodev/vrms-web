import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcnPrcCheckInComponent } from './vcn-prc-check-in.component';

describe('VcnPrcCheckInComponent', () => {
  let component: VcnPrcCheckInComponent;
  let fixture: ComponentFixture<VcnPrcCheckInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcnPrcCheckInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VcnPrcCheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
