import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  searchTerm: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  @Output() searchQuery = new EventEmitter<string>();

  onSearchQueryChange() {
    this.searchQuery.emit(this.searchTerm);
  }

}
