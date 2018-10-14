import { TestBed, inject } from '@angular/core/testing';

import { PlaysService } from './plays.service';

describe('PlaysService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaysService]
    });
  });

  it('should be created', inject([PlaysService], (service: PlaysService) => {
    expect(service).toBeTruthy();
  }));
});
