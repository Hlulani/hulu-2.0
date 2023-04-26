import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesServiceService {
  url = `${environment.apiURL}`;
  apiKey = `${environment.API_KEY}`;

  public moviesData$ = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {}

  getAllData(): Observable<any> {
    return this.http.get(this.url + `/movie/550?api_key=` + this.apiKey);
  }

  getAllTrending(): Observable<any> {
    return this.http
      .get(this.url + `/trending/all/day?api_key=` + this.apiKey)
      .pipe(
        map((response: any) => {
          const movies =
            response.results.length && response.results ? response.results : [];
          this.moviesData$.next(movies);
          return movies;
        })
      );
  }

  getAllFiction(): Observable<any> {
    return this.http
      .get(
        this.url + `/discover/movie?api_key=` + this.apiKey + `&with_genres=878`
      )
      .pipe(
        map((response: any) => {
          const movies =
            response.results.length && response.results ? response.results : [];
          this.moviesData$.next(movies);
          return movies;
        })
      );
  }

  getAllAction(): Observable<any> {
    return this.http
      .get(
        this.url + `/discover/movie?api_key=` + this.apiKey + `&with_genres=27`
      )
      .pipe(
        map((response: any) => {
          const movies =
            response.results.length && response.results ? response.results : [];
          this.moviesData$.next(movies);
          return movies;
        })
      );
  }

  public searchMovies(query: string): Observable<any> {
    return this.moviesData$.pipe(
      map((movies) => {
        if (!movies || !movies.length) return [];
        return movies.filter((movie: any) => {
          const title = movie.title ? movie.title.toLowerCase() : '';
          return title.includes(query);
        });
      })
    );
  }
}
