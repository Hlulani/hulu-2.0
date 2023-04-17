import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {


  url = `${environment.apiURL}`;
  apiKey = `${environment.API_KEY}`

  
  constructor(private http: HttpClient) { }

  getAllData(): Observable<any> {
    return this.http.get(this.url + `/movie/550?api_key=` + this.apiKey)
 }
  getAllTrending(): Observable<any> {
    return this.http.get(this.url + `/trending/all/day?api_key=` + this.apiKey)
 }

 getAllAction(): Observable<any> {
  return this.http.get(this.url + `/discover/movie?api_key=` + this.apiKey + `&with_genres=27`)
 }

 getAllFiction(): Observable<any> {
  return this.http.get(this.url + `/discover/movie?api_key=` + this.apiKey + `&with_genres=878`)
 }

  
}
