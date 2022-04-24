import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcnPrcTestFormComponent } from './vcn-prc-test-form.component';

describe('VcnPrcTestFormComponent', () => {
  let component: VcnPrcTestFormComponent;
  let fixture: ComponentFixture<VcnPrcTestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcnPrcTestFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VcnPrcTestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
