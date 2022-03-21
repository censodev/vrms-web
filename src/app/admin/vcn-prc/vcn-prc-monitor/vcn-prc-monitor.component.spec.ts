import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcnPrcMonitorComponent } from './vcn-prc-monitor.component';

describe('VcnPrcMonitorComponent', () => {
  let component: VcnPrcMonitorComponent;
  let fixture: ComponentFixture<VcnPrcMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcnPrcMonitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VcnPrcMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
