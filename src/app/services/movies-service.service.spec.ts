import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { MoviesServiceService } from './movies-service.service';

describe('MoviesServiceService', () => {
  let service: MoviesServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MoviesServiceService],
    });

    service = TestBed.inject(MoviesServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all data', () => {
    const mockResponse = { title: 'Mock Movie' };
    service.getAllData().subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(
      `${environment.apiURL}/movie/550?api_key=${environment.API_KEY}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should get all trending movies', () => {
    const mockResponse = {
      results: [{ title: 'Mock Movie 1' }, { title: 'Mock Movie 2' }],
    };
    service.getAllTrending().subscribe((response) => {
      expect(response).toEqual(mockResponse.results);
    });

    const req = httpMock.expectOne(
      `${environment.apiURL}/trending/all/day?api_key=${environment.API_KEY}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should get all fiction movies', () => {
    const mockResponse = {
      results: [{ title: 'Mock Movie 1' }, { title: 'Mock Movie 2' }],
    };
    service.getAllFiction().subscribe((response) => {
      expect(response).toEqual(mockResponse.results);
    });

    const req = httpMock.expectOne(
      `${environment.apiURL}/discover/movie?api_key=${environment.API_KEY}&with_genres=878`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should get all action movies', () => {
    const mockResponse = {
      results: [{ title: 'Mock Movie 1' }, { title: 'Mock Movie 2' }],
    };
    service.getAllAction().subscribe((response) => {
      expect(response).toEqual(mockResponse.results);
    });

    const req = httpMock.expectOne(
      `${environment.apiURL}/discover/movie?api_key=${environment.API_KEY}&with_genres=27`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should search movies by title', () => {
    const mockMovies = [{ title: 'The Dark Knight' }, { title: 'Inception' }];
    service.moviesData$.next(mockMovies);

    service.searchMovies('dark').subscribe((response) => {
      expect(response).toEqual([{ title: 'The Dark Knight' }]);
    });

    service.searchMovies('tion').subscribe((response) => {
      expect(response).toEqual([{ title: 'Inception' }]);
    });

    service.searchMovies('nonexistent').subscribe((response) => {
      expect(response).toEqual([]);
    });
  });
});
