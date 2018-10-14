import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Moment.js
import * as moment from 'moment-mini';

// Services
import { PlaysService } from './plays.service';

@Component({
  selector: 'app-plays',
  templateUrl: './plays.component.html',
  styleUrls: ['./plays.component.css']
})
export class PlaysComponent implements OnInit {
  readonly defaultArtist = {
    id: '',
    name: ''
  };

  allArtists: Array<any>;
  allCountinents: Array<any>;
  artist = this.defaultArtist;

  constructor(
    private playsService: PlaysService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.allArtists = this.activatedRoute.snapshot.data.initialData[1];
    this.allCountinents = this.activatedRoute.snapshot.data.initialData[0];
  }

  setValue(field, value) {
    this[field] = value;
  }

}
