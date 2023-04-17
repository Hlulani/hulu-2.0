import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from 'src/app/services/movies-service.service';

@Component({
  selector: 'trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss'],
})
export class TrendingComponent implements OnInit {
  movies: any[] = [];

  constructor(private moviesService: MoviesServiceService) {}

  ngOnInit(): void {
    this.moviesService.getAllTrending().subscribe((data) => {
      console.log('Data', data.results);
      this.movies = data.results;
    });
  }

  searchText: string = '';

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log('Search Text', this.searchText);
  }
}
