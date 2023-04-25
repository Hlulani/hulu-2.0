import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { MoviesServiceService } from './movies-service.service';

xdescribe('MoviesServiceService', () => {
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

  xit('should retrieve trending movies', () => {
    const mockResponse = {
      results: [{ title: 'Movie 1' }, { title: 'Movie 2' }],
    };

    service.getAllTrending().subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(
      `${environment.apiURL}/trending/all/day?api_key=${environment.API_KEY}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  xit('should retrieve action movies', () => {
    const mockResponse = {
      results: [{ title: 'Movie 3' }, { title: 'Movie 4' }],
    };

    service.getAllAction().subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(
      `${environment.apiURL}/discover/movie?api_key=${environment.API_KEY}&with_genres=27`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  xit('should retrieve fiction movies', () => {
    const mockResponse = {
      results: [{ title: 'Movie 5' }, { title: 'Movie 6' }],
    };

    service.getAllFiction().subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(
      `${environment.apiURL}/discover/movie?api_key=${environment.API_KEY}&with_genres=878`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
