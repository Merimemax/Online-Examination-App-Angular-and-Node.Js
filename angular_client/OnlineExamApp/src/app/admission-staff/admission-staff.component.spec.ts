import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionStaffComponent } from './admission-staff.component';

describe('AdmissionStaffComponent', () => {
  let component: AdmissionStaffComponent;
  let fixture: ComponentFixture<AdmissionStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
