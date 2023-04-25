import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/model';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  movies: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.getFavorites();
  }

  getFavorites() {
    //Get value from local storage
    const favoriteMovieValue = localStorage.getItem('favouriteMovies') || '[]';
    this.movies = JSON.parse(favoriteMovieValue) as Movie[];
  }
}
