import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcnScreeningTmplFormComponent } from './vcn-screening-tmpl-form.component';

describe('VcnScreeningTmplFormComponent', () => {
  let component: VcnScreeningTmplFormComponent;
  let fixture: ComponentFixture<VcnScreeningTmplFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcnScreeningTmplFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VcnScreeningTmplFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
