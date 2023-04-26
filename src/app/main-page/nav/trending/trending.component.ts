import { Component, Input, OnInit } from '@angular/core';
import { MoviesServiceService } from 'src/app/services/movies-service.service';

@Component({
  selector: 'trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss'],
})
export class TrendingComponent implements OnInit {
  @Input() favoriteMovies: any[] = [];

  constructor(public moviesService: MoviesServiceService) {
    this.moviesService.getAllTrending().subscribe()
  }

  ngOnInit(): void {
  }
}
