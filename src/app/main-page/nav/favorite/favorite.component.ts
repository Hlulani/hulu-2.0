import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from 'src/app/services/movies-service.service';
import { Movie } from 'src/app/shared/model';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  movies: any[] = [];

  constructor(private moviesService: MoviesServiceService) { 

  }

  ngOnInit(): void {
    this.getFavorites();
  }

  getAllTrendingMovies() {
    this.moviesService.getAllTrending().subscribe((data) => {
      console.log('Data', data.results);
      this.movies = data.results;
    });
  }

  getFavorites() {
    //Get value from local storage
    const favoriteMovieValue = localStorage.getItem('favouriteMovies') || '[]'
    this.movies = JSON.parse(favoriteMovieValue) as Movie[];
  }
}
