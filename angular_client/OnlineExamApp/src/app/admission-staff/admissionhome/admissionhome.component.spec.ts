import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionhomeComponent } from './admissionhome.component';

describe('AdmissionhomeComponent', () => {
  let component: AdmissionhomeComponent;
  let fixture: ComponentFixture<AdmissionhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
