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

  it('should contain required methods', inject([PlaysService], (service: PlaysService) => {
    expect(service.getAllCountinents).toBeDefined();
    expect(service.getAllArtists).toBeDefined();
  }));

});
