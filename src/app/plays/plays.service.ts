
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

  getAllCountinents(): Observable<any> {
    return this.http.get(`${this.baseUrl}countinents`)
    // Temp: for in-memory-data
    .pipe(map(res => res.json()));
  }

  getAllArtists(): Observable<any> {
    return this.http.get(`${this.baseUrl}artists`)
    // Temp: for in-memory-data
    .pipe(map(res => res.json()));
  }

  getSongs(artist_id?: number): Observable<any> {
    const params = { artist_id };
    return this.http.get(`${this.baseUrl}songs`, { params })
    // Temp: for in-memory-data
    .pipe(map(res => res.json()));
  }

  getCountries(countinent_id?: number): Observable<any> {
    const params = { countinent_id };
    return this.http.get(`${this.baseUrl}countries`, { params })
    // Temp: for in-memory-data
    .pipe(map(res => res.json()));
  }

  getCities(countinent_id?: number, country_id?: number): Observable<any> {
    const params = { countinent_id, country_id };
    return this.http.get(`${this.baseUrl}cities`, { params })
    // Temp: for in-memory-data
    .pipe(map(res => res.json()));
  }

  getChannels(countinent_id?: number, country_id?: number, city_id?: number): Observable<any> {
    const params = { countinent_id, country_id, city_id };
    return this.http.get(`${this.baseUrl}channels`, { params })
    // Temp: for in-memory-data
    .pipe(map(res => res.json()));
  }

  getBroadcasts(
    artist_id?: number, song_id?: number, countinent_id?: number, country_id?: number, city_id?: number, date?: string
  ): Observable<any> {
    const params = { artist_id, song_id, countinent_id, country_id, city_id, date };
    return this.http.get(`${this.baseUrl}broadcasts`, { params })
    // Temp: for in-memory-data
    .pipe(map(res => res.json()));
  }
}
