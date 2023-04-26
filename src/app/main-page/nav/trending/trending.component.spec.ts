import { of } from 'rxjs';
import { MoviesServiceService } from 'src/app/services/movies-service.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingComponent } from './trending.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TrendingComponent', () => {
  let component: TrendingComponent;
  let fixture: ComponentFixture<TrendingComponent>;
  let moviesService: jasmine.SpyObj<MoviesServiceService>;

  beforeEach(async () => {
    moviesService = jasmine.createSpyObj('MoviesServiceService', [
      'getAllTrending',
    ]);
    moviesService.getAllTrending.and.returnValue(
      of({
        results: [
          { id: 1, title: 'Movie 1' },
          { id: 2, title: 'Movie 2' },
          { id: 3, title: 'Movie 3' },
        ],
      })
    );
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TrendingComponent],
      providers: [{ provide: MoviesServiceService, useValue: moviesService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getAllTrendingMovies', () => {
    it('should call getAllTrending on moviesService', () => {
      component.getAllTrendingMovies();
      expect(moviesService.getAllTrending).toHaveBeenCalled();
    });

    it('should set the movies property to the response data', () => {
      component.getAllTrendingMovies();
      expect(component.movies).toEqual([
        { id: 1, title: 'Movie 1' },
        { id: 2, title: 'Movie 2' },
        { id: 3, title: 'Movie 3' },
      ]);
    });
  });
});
