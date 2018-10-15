import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

// RxJS
import { forkJoin } from 'rxjs';

// Services
import { PlaysService } from './plays.service';

@Injectable()
export class PlaysResolve implements Resolve<any> {

  constructor(
    private playsService: PlaysService
  ) {}

  resolve() {
    const continentsRequest = this.playsService.getAllContinents();
    const artistsRequest = this.playsService.getAllArtists();

    return forkJoin([continentsRequest, artistsRequest]);
  }
}
