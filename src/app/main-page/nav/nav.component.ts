import { Movie } from 'src/app/shared/model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  searchQuery: string = '';

  movies: Movie[] = [];


  constructor() { }

  ngOnInit(): void {
  }


  filterMovies() {
    return this.movies.filter(movie => {
      const name = movie.title.toLowerCase();
      const query = this.searchQuery.toLowerCase();
      
      return name.includes(query);
    });
  }

}
