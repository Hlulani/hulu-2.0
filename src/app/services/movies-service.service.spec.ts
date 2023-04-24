import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { MoviesServiceService } from './movies-service.service';

describe('MoviesServiceService', () => {
  let service: MoviesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [MoviesServiceService]
    });
    service = TestBed.inject(MoviesServiceService);

   
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
