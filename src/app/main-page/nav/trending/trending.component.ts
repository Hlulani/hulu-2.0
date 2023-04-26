import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from 'src/app/services/movies-service.service';

@Component({
  selector: 'trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss'],
})
export class TrendingComponent implements OnInit {
  movies: any[] = [];

  constructor(public moviesService: MoviesServiceService) {
    
  }

  ngOnInit(): void {
    this.getAllTrendingMovies()
  }

  getAllTrendingMovies() {
    this.moviesService.getAllTrending().subscribe((data) => {
      this.movies = data.results;
    });
  }
}
