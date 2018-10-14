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
    const countinentsRequst = this.playsService.getAllCountinents();
    const artistsRequst = this.playsService.getAllArtists();

    return forkJoin([countinentsRequst, artistsRequst]);
  }
}
