import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiDatatableComponent } from './semi-datatable.component';

describe('SemiDatatableComponent', () => {
  let component: SemiDatatableComponent;
  let fixture: ComponentFixture<SemiDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemiDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemiDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
