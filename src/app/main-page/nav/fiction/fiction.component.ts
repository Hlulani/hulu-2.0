import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from 'src/app/services/movies-service.service';

@Component({
  selector: 'app-fiction',
  templateUrl: './fiction.component.html',
  styleUrls: ['./fiction.component.scss']
})
export class FictionComponent implements OnInit {

  constructor(public moviesService: MoviesServiceService) {
    this.moviesService.getAllFiction().subscribe()
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}
