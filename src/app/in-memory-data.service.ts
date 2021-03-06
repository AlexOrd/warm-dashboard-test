/* tslint:disable:max-line-length */

import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const continents = [
      { id: 1, name: 'Africa' },
      { id: 2, name: 'Asia' },
      { id: 3, name: 'Europe' },
      { id: 4, name: 'North America' },
      { id: 5, name: 'South America' },
      { id: 6, name: 'Australia/Oceania' },
    ];

    const countries = [
      { id: 1, continent_id: 1, name: 'Egypt' },
      { id: 2, continent_id: 2, name: 'Japan' },
      { id: 3, continent_id: 3, name: 'Denmark' },
      { id: 4, continent_id: 4, name: 'Canada' },
      { id: 5, continent_id: 5, name: 'Brazil' },
      { id: 6, continent_id: 6, name: 'Australia' },
    ];

    const cities = [
      { id: 1, country_id: 1, continent_id: 1, name: 'Alexandria' },
      { id: 2, country_id: 2, continent_id: 2, name: 'Tokio' },
      { id: 3, country_id: 3, continent_id: 3, name: 'Copenhagen' },
      { id: 4, country_id: 4, continent_id: 4, name: 'Toronto' },
      { id: 5, country_id: 5, continent_id: 5, name: 'Rio de Janeiro' },
      { id: 6, country_id: 6, continent_id: 6, name: 'Canberra' },
    ];

    const channels = [
      { id: 1, price_per_minute: 2, city_id: 1, country_id: 1, continent_id: 1, name: 'Alexandria BBC' },
      { id: 2, price_per_minute: 5, city_id: 2, country_id: 2, continent_id: 2, name: 'Tokio BBC' },
      { id: 3, price_per_minute: 7, city_id: 3, country_id: 3, continent_id: 3, name: 'Copenhagen BBC' },
      { id: 4, price_per_minute: 4, city_id: 4, country_id: 4, continent_id: 4, name: 'Toronto BBC' },
      { id: 5, price_per_minute: 8, city_id: 5, country_id: 5, continent_id: 5, name: 'Rio de Janeiro BBC' },
      { id: 6, price_per_minute: 3, city_id: 6, country_id: 6, continent_id: 6, name: 'Canberra BBC' },
    ];

    const artists = [
      { id: 1, name: 'AC/DC' },
      { id: 2, name: 'The Queen' },
      { id: 3, name: 'Manowar' },
    ];

    const songs = [
      { id: 1, artist_id: 1, name: 'Thunderstruck' },
      { id: 2, artist_id: 2, name: 'Bohemian Rhapsody' },
      { id: 3, artist_id: 3, name: 'Die for Metal' },
    ];

    const broadcasts = [
      { id: 1, artist_id: 1, artist_name: 'AC/DC', song_id: 1, song_name: 'Thunderstruck', city_id: 1, country_id: 1, channel_id: 1, price_per_minute: 2, continent_id: 1, date: '2018-10-01', plays_number: 3, duration_minutes: 5 },
      { id: 2, artist_id: 1, artist_name: 'AC/DC', song_id: 1, song_name: 'Thunderstruck', city_id: 2, country_id: 2, channel_id: 2, price_per_minute: 5, continent_id: 2, date: '2018-10-14', plays_number: 1, duration_minutes: 3 },
      { id: 3, artist_id: 1, artist_name: 'AC/DC', song_id: 1, song_name: 'Thunderstruck', city_id: 3, country_id: 3, channel_id: 3, price_per_minute: 7, continent_id: 3, date: '2018-10-15', plays_number: 1, duration_minutes: 7 },
      { id: 4, artist_id: 1, artist_name: 'AC/DC', song_id: 1, song_name: 'Thunderstruck', city_id: 4, country_id: 4, channel_id: 4, price_per_minute: 4, continent_id: 4, date: '2018-10-15', plays_number: 8, duration_minutes: 10 },
      { id: 5, artist_id: 1, artist_name: 'AC/DC', song_id: 1, song_name: 'Thunderstruck', city_id: 5, country_id: 5, channel_id: 5, price_per_minute: 8, continent_id: 5, date: '2018-10-15', plays_number: 10, duration_minutes: 22 },
      { id: 6, artist_id: 1, artist_name: 'AC/DC', song_id: 1, song_name: 'Thunderstruck', city_id: 6, country_id: 6, channel_id: 6, price_per_minute: 3, continent_id: 6, date: '2018-10-16', plays_number: 1, duration_minutes: 2 },

      { id: 7, artist_id: 2, artist_name: 'The Queen', song_id: 2, song_name: 'Bohemian Rhapsody', city_id: 1, country_id: 1, channel_id: 1, price_per_minute: 2, continent_id: 1, date: '2018-10-01', plays_number: 3, duration_minutes: 5 },
      { id: 8, artist_id: 2, artist_name: 'The Queen', song_id: 2, song_name: 'Bohemian Rhapsody', city_id: 2, country_id: 2, channel_id: 2, price_per_minute: 5, continent_id: 2, date: '2018-10-14', plays_number: 1, duration_minutes: 3 },
      { id: 9, artist_id: 2, artist_name: 'The Queen', song_id: 2, song_name: 'Bohemian Rhapsody', city_id: 3, country_id: 3, channel_id: 3, price_per_minute: 7, continent_id: 3, date: '2018-10-15', plays_number: 1, duration_minutes: 7 },
      { id: 10, artist_id: 2, artist_name: 'The Queen', song_id: 2, song_name: 'Bohemian Rhapsody', city_id: 4, country_id: 4, channel_id: 4, price_per_minute: 4, continent_id: 4, date: '2018-10-15', plays_number: 5, duration_minutes: 10 },
      { id: 11, artist_id: 2, artist_name: 'The Queen', song_id: 2, song_name: 'Bohemian Rhapsody', city_id: 5, country_id: 5, channel_id: 5, price_per_minute: 8, continent_id: 5, date: '2018-10-15', plays_number: 7, duration_minutes: 22 },
      { id: 12, artist_id: 2, artist_name: 'The Queen', song_id: 2, song_name: 'Bohemian Rhapsody', city_id: 6, country_id: 6, channel_id: 6, price_per_minute: 3, continent_id: 6, date: '2018-10-13', plays_number: 1, duration_minutes: 2 },

      { id: 13, artist_id: 3, artist_name: 'Manowar', song_id: 3, song_name: 'Die for Metal', city_id: 1, channel_id: 1, price_per_minute: 2, country_id: 1, continent_id: 1, date: '2018-10-01', plays_number: 3, duration_minutes: 5 },
      { id: 14, artist_id: 3, artist_name: 'Manowar', song_id: 3, song_name: 'Die for Metal', city_id: 2, channel_id: 2, price_per_minute: 5, country_id: 2, continent_id: 2, date: '2018-10-14', plays_number: 1, duration_minutes: 3 },
      { id: 15, artist_id: 3, artist_name: 'Manowar', song_id: 3, song_name: 'Die for Metal', city_id: 3, channel_id: 3, price_per_minute: 7, country_id: 3, continent_id: 3, date: '2018-10-15', plays_number: 1, duration_minutes: 7 },
      { id: 16, artist_id: 3, artist_name: 'Manowar', song_id: 3, song_name: 'Die for Metal', city_id: 4, channel_id: 4, price_per_minute: 4, country_id: 4, continent_id: 4, date: '2018-10-15', plays_number: 4, duration_minutes: 10 },
      { id: 17, artist_id: 3, artist_name: 'Manowar', song_id: 3, song_name: 'Die for Metal', city_id: 5, channel_id: 5, price_per_minute: 8, country_id: 5, continent_id: 5, date: '2018-10-15', plays_number: 9, duration_minutes: 22 },
      { id: 18, artist_id: 3, artist_name: 'Manowar', song_id: 3, song_name: 'Die for Metal', city_id: 6, channel_id: 6, price_per_minute: 3, country_id: 6, continent_id: 6, date: '2018-10-13', plays_number: 1, duration_minutes: 2 },
    ];

    return {
      continents,
      countries,
      cities,
      channels,
      artists,
      songs,
      broadcasts,
    };
  }
}
