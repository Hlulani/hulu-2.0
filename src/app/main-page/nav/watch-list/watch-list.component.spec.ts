import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchListComponent } from './watch-list.component';

describe('MovieListComponent', () => {
  let component: WatchListComponent;
  let fixture: ComponentFixture<WatchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WatchListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchListComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize watch list movies array with data from local storage', () => {
    const mockMovies = [
      { title: 'The Shawshank Redemption', year: 1994, genre: 'Drama' },
      { title: 'The Godfather', year: 1972, genre: 'Crime' },
      { title: 'The Dark Knight', year: 2008, genre: 'Action' },
    ];
    const mockLocalStorage = {
      getItem: (key: string) => {
        if (key === 'watchListMovies') {
          return JSON.stringify(mockMovies);
        }
        return null;
      },
    };
    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);

    component.ngOnInit();

    expect(component.movies).toEqual(mockMovies);
  });

  it('should initialize watch list movies array with empty array if local storage is empty', () => {
    const mockLocalStorage = {
      getItem: (key: string) => {
        if (key === 'watchListMovies') {
          return null;
        }
        return null;
      },
    };
    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);

    component.ngOnInit();

    expect(component.movies).toEqual([]);
  });
});
