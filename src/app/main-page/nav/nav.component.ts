import {Component, OnDestroy} from '@angular/core';
import {MoviesServiceService} from "../../services/movies-service.service";
import {Location} from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnDestroy {

  searchQuery: string = '';

  movies: any = []
  public moviesData$ = new BehaviorSubject<any>([]); // initialize moviesData$ with an empty array


  constructor(public moviesServiceService: MoviesServiceService, private location: Location) {
  }

  ngOnDestroy() {
    this.moviesServiceService.moviesData$.unsubscribe()
  }

  filterMovies() {
    setTimeout(() => {
      const query = this.searchQuery.toLowerCase()

      if (query === '') {
        this.getAllMovies()
        return
      }

      this.moviesServiceService.searchMovies(query).subscribe((movies) => {
        this.moviesServiceService.moviesData$.next(movies)
      })
    }, 1000)
  }

  getAllMovies() {
    const path = this.location.path()
    if (path === '/fiction') {
      this.moviesServiceService.getAllFiction().subscribe()
    } else if (path === '/' || path === '') {
      this.moviesServiceService.getAllTrending().subscribe()
    } else if (path === '/action') {
      this.moviesServiceService.getAllAction().subscribe()
    }
  }

}
