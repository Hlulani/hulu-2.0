import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/model';

@Component({
  selector: 'watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss'],
})
export class WatchListComponent implements OnInit {
  movies: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.getWatchList();
  }

  getWatchList() {
    //Get value from local storage
    const watchListMovieValue = localStorage.getItem('watchListMovies') || '[]';
    this.movies = JSON.parse(watchListMovieValue) as Movie[];
  }
}
