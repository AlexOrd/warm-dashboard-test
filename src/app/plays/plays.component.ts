/* tslint:disable:no-switch-case-fall-through */

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
  readonly emptyState = {
    id: '',
    name: '',
  };
  readonly initialValues = {
    selected: { ...this.emptyState },
    all: [],
  };

  queryState = {
    artists: { ...this.initialValues },
    songs: { ...this.initialValues },
    continents: { ...this.initialValues },
    countries: { ...this.initialValues },
    cities: { ...this.initialValues },
    channels: { ...this.initialValues },
    allVersions: false,
    dateRange: [
      '',
      ''
    ],
  };

  plays = [];
  totalPrice = 0;

  constructor(
    private playsService: PlaysService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.queryState.artists.all = this.activatedRoute.snapshot.data.initialData[1];
    this.queryState.continents.all = this.activatedRoute.snapshot.data.initialData[0];
  }

  switchAllVersions() {
    // Temporary unused
    this.queryState.allVersions = !this.queryState.allVersions;
  }

  uncheckFromTotal(playIndex) {
    this.plays[playIndex].selected = !this.plays[playIndex].selected;
    this.totalPrice = this.calculateTotalPrice(this.plays);
  }

  getPlays() {
    const artistId = this.queryState.artists.selected.id;
    const songId = this.queryState.songs.selected.id;
    const continentId = this.queryState.continents.selected.id;
    const countryId = this.queryState.countries.selected.id;
    const cityId = this.queryState.cities.selected.id;
    // Temp: using only first date from range
    const selectedDate = this.queryState.dateRange[0] && moment(this.queryState.dateRange[0]).format('YYYY-MM-DD');

    this.playsService.getBroadcasts(artistId, songId, continentId, countryId, cityId, selectedDate).subscribe(
      plays => {
        this.plays = plays.map(data => ({...data, selected: true}));
        this.totalPrice = this.calculateTotalPrice(this.plays);
      },
      error => console.warn(error)
    );
  }

  calculateTotalPrice(plays) {
    return plays.reduce((total, play: any) => {
      return play.selected ? total + play.duration_minutes * play.price_per_minute : total;
    }, 0);
  }

  setValue(stateName, value) {
    this.queryState[stateName].selected = value;
    this.getDataForSelect(stateName);
    this.getPlays();
  }

  eraseValue(stateName) {
    switch (stateName) {
      case 'artists':
        this.queryState.artists.selected = { ...this.emptyState };
      case 'songs':
        this.queryState.songs.selected = { ...this.emptyState };
        break;
      case 'continents':
        this.queryState.continents.selected = { ...this.emptyState };
      case 'countries':
        this.queryState.countries.selected = { ...this.emptyState };
      case 'cities':
        this.queryState.cities.selected = { ...this.emptyState };
      case 'channels':
        this.queryState.channels.selected = { ...this.emptyState };
        break;
    }
  }

  getDataForSelect(state) {
    const artistId = this.queryState.artists.selected.id;
    const continentId = this.queryState.continents.selected.id;
    const countryId = this.queryState.countries.selected.id;
    const cityId = this.queryState.cities.selected.id;

    switch (state) {
      case 'artists':
        this.playsService.getSongs(artistId).subscribe(
          songs => this.queryState.songs.all = songs,
          error => console.warn(error)
        );
        break;
      case 'continents':
        this.playsService.getCountries(continentId).subscribe(
          countries => this.queryState.countries.all = countries,
          error => console.warn(error)
        );
        break;
      case 'countries':
        this.playsService.getCities(continentId, countryId).subscribe(
          cities => this.queryState.cities.all = cities,
          error => console.warn(error)
        );
        break;
      case 'cities':
        this.playsService.getChannels(continentId, countryId, cityId).subscribe(
          channels => this.queryState.channels.all = channels,
          error => console.warn(error)
        );
        break;
    }
  }
}
