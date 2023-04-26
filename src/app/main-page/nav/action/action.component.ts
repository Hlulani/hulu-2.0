import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from 'src/app/services/movies-service.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  constructor(public moviesService: MoviesServiceService) {
    this.moviesService.getAllAction().subscribe()
  }
  ngOnInit(): void {
  }

}
