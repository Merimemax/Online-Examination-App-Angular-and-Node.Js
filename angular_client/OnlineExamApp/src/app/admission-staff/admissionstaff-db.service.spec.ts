import { TestBed } from '@angular/core/testing';

import { AdmissionstaffDBService } from './admissionstaff-db.service';

describe('AdmissionstaffDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdmissionstaffDBService = TestBed.get(AdmissionstaffDBService);
    expect(service).toBeTruthy();
  });
});
