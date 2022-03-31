import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcnSiteFormComponent } from './vcn-site-form.component';

describe('VcnSiteFormComponent', () => {
  let component: VcnSiteFormComponent;
  let fixture: ComponentFixture<VcnSiteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcnSiteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VcnSiteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
