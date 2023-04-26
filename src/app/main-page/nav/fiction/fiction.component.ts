import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from 'src/app/services/movies-service.service';

@Component({
  selector: 'app-fiction',
  templateUrl: './fiction.component.html',
  styleUrls: ['./fiction.component.scss']
})
export class FictionComponent implements OnInit {
  movies: any[] = [];

  constructor(public moviesService: MoviesServiceService) {
  }
  
  ngOnInit(): void {
    this.getAllFictionMovies();
  }

  getAllFictionMovies() {
    this.moviesService.getAllFiction().subscribe((data) => {
      this.movies = data.results;
    });

  }
  
}
