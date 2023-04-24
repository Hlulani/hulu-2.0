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

  isFavorite(movie: any): boolean {
    const favoriteMovies = localStorage.getItem('favouriteMovies') || '[]';

    const favoriteMoviesList = JSON.parse(favoriteMovies) as Movie[];

    const arr = Array.from(favoriteMoviesList);

    console.log('Array', arr)

    return arr.some(
      (favoriteMovieObj) => favoriteMovieObj.title == movie.title
    );
  }


  isWatchList(movie: any): boolean {
    const favoriteMovies = localStorage.getItem('watchListMovies') || '[]';

    const favoriteMoviesList = JSON.parse(favoriteMovies) as Movie[];

    const arr = Array.from(favoriteMoviesList);

    console.log('Array', arr)

    return arr.some(
      (favoriteMovieObj) => favoriteMovieObj.title == movie.title
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
      'watchListMovies',
      JSON.stringify(watchListMoviesMoviesList)
    );
  }

  removeMoviesFromFavorite() {
    //Get List from local storage as array or null
    const favoriteMovies = localStorage.getItem('favouriteMovies') || '[]';

    //Parse a value from local storage
    let favoriteMoviesList = JSON.parse(favoriteMovies) as Movie[];

    // Find the index of the movie to remove
    let index = favoriteMoviesList.findIndex((m) => m.title=== this.movie?.title);

    if (index > -1) {
      // Remove the movie from the array
      favoriteMoviesList.splice(index, 1);

      // Convert the modified array back to JSON
      const updatedFavorites = JSON.stringify(favoriteMoviesList);

      // Store the modified JSON data back to local storage
      localStorage.setItem('favouriteMovies', updatedFavorites);
    }
  }

  removeMoviesFromWatchList() {
    //Get List from local storage as array or null
    const favoriteMovies = localStorage.getItem('favouriteMovies') || '[]';

    //Parse a value from local storage
    let favoriteMoviesList = JSON.parse(favoriteMovies) as Movie[];

    // Find the index of the movie to remove
    let index = favoriteMoviesList.findIndex((m) => m.title === this.movie?.title);

    if (index > -1) {
      // Remove the movie from the array
      favoriteMoviesList.splice(index, 1);

      // Convert the modified array back to JSON
      const updatedFavorites = JSON.stringify(favoriteMoviesList);

      // Store the modified JSON data back to local storage
      localStorage.setItem('favouriteMovies', updatedFavorites);
    }
  }
}
