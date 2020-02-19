import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  baseUrl = 'http://www.omdbapi.com/';
  apiKey = '236e345e';

  constructor(
    private http: HttpClient
  ) {}

  searchData(title: string, type: SearchType): Observable<any> {
    return this.http.get(`${this.baseUrl}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`)
      .pipe(
        map(results => {
          console.log('RAW: ', results);
          return results['Search'];
        })
      );
  }

  getDetails(id) {
    return this.http.get(`${this.baseUrl}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }


}