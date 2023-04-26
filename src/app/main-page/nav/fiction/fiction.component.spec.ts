import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesServiceService } from 'src/app/services/movies-service.service';

import { FictionComponent } from './fiction.component';
import { of } from 'rxjs';


describe('FictionComponent', () => {
  let component: FictionComponent;
  let fixture: ComponentFixture<FictionComponent>;
  let moviesService: jasmine.SpyObj<MoviesServiceService>;

  beforeEach(async () => {
    moviesService = jasmine.createSpyObj('MoviesServiceService', ['getAllFiction']);
    moviesService.getAllFiction.and.returnValue(of({
      results: [
        { id: 1, title: 'Movie 1' },
        { id: 2, title: 'Movie 2' },
        { id: 3, title: 'Movie 3' }
      ]
    }));
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ FictionComponent ],
      providers: [
        { provide: MoviesServiceService, useValue: moviesService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FictionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getAllFictionMovies', () => {
    it('should call getAllTrending on moviesService', () => {
      component.getAllFictionMovies();
      expect(moviesService.getAllFiction).toHaveBeenCalled();
    });

    it('should set the fiction movies property to the response data', () => {
      component.getAllFictionMovies();
      expect(component.movies).toEqual([
        { id: 1, title: 'Movie 1' },
        { id: 2, title: 'Movie 2' },
        { id: 3, title: 'Movie 3' }
      ]);
    });
  });
});


