import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/model';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {


  @Input() movie: Movie | undefined;

  constructor() { }

  ngOnInit(): void {

  }

}
