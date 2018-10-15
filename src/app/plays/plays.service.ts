
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlaysService {
  private baseUrl = 'api/';

  constructor(private http: Http) { }

  getAllContinents(): Observable<any> {
    return this.http.get(`${this.baseUrl}continents`)
    // Temp: for in-memory-data
    .pipe(map(res => res.json()));
  }

  getAllArtists(): Observable<any> {
    return this.http.get(`${this.baseUrl}artists`)
    // Temp: for in-memory-data
    .pipe(map(res => res.json()));
  }

  getSongs(artist_id): Observable<any> {
    const params = { artist_id };
    return this.http.get(`${this.baseUrl}songs`, { params })
    // Temp: for in-memory-data
    .pipe(map(res => res.json()));
  }

  getCountries(continent_id): Observable<any> {
    const params = { continent_id };
    return this.http.get(`${this.baseUrl}countries`, { params })
    // Temp: for in-memory-data
    .pipe(map(res => res.json()));
  }

  getCities(continent_id, country_id): Observable<any> {
    const params = { continent_id, country_id };
    return this.http.get(`${this.baseUrl}cities`, { params })
    // Temp: for in-memory-data
    .pipe(map(res => res.json()));
  }

  getChannels(continent_id, country_id, city_id): Observable<any> {
    const params = { continent_id, country_id, city_id };
    return this.http.get(`${this.baseUrl}channels`, { params })
    // Temp: for in-memory-data
    .pipe(map(res => res.json()));
  }

  getBroadcasts(artist_id, song_id, continent_id, country_id, city_id, date): Observable<any> {
    const params = { artist_id, song_id, continent_id, country_id, city_id, date };
    return this.http.get(`${this.baseUrl}broadcasts`, { params })
    // Temp: for in-memory-data
    .pipe(map(res => res.json()));
  }
}
