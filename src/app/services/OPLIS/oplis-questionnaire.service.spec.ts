import { TestBed } from '@angular/core/testing';

import { OplisQuestionnaireService } from './oplis-questionnaire.service';

describe('OplisQuestionnaireService', () => {
  let service: OplisQuestionnaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OplisQuestionnaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
