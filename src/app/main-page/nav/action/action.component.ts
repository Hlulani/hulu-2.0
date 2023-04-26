import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from 'src/app/services/movies-service.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
})
export class ActionComponent implements OnInit {
  movies: any[] = [];

  constructor(public moviesService: MoviesServiceService) {}
  ngOnInit(): void {
    this.getAllActionMovies();
  }

  getAllActionMovies() {
    this.moviesService.getAllAction().subscribe((data) => {
      this.movies = data.results;
    });
  }
}
