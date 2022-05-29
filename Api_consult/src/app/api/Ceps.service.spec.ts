/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CepsService } from './services/Ceps.service';

describe('Service: Ceps', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CepsService]
    });
  });

  it('should ...', inject([CepsService], (service: CepsService) => {
    expect(service).toBeTruthy();
  }));
});
