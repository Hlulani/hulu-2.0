import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/shared/model';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Output() addToFavorites = new EventEmitter<any>();

  @Input() movie: Movie | undefined;

  constructor() {}

  ngOnInit(): void {}

  favoriteMovies: any[] = [];

  isFavorite(movie: any): boolean {
    return this.favoriteMovies.some(
      (favoriteMovie) => favoriteMovie.id === movie.id
    );
  }

  onAddToFavorites() {
    //Get List from local storage as array or null
    const favoriteMovies = localStorage.getItem('favouriteMovies') || '[]';

    //Parse a value from local storage
    const favoriteMoviesList = JSON.parse(favoriteMovies) as Movie[];

    //Push movie to array
    favoriteMoviesList.push(this.movie!);

    //Set value back to local storage
    localStorage.setItem('favouriteMovies', JSON.stringify(favoriteMoviesList));
  }

  onAddToWatchList() {
    //Get List from local storage as array or null
    const watchListMovies = localStorage.getItem('watchListMovies') || '[]';

    //Parse a value from local storage
    const watchListMoviesMoviesList = JSON.parse(watchListMovies) as Movie[];

    //Push movie to array
    watchListMoviesMoviesList.push(this.movie!);

    //Set value back to local storage
    localStorage.setItem(
      'favouriteMovies',
      JSON.stringify(watchListMoviesMoviesList)
    );
  }
}
