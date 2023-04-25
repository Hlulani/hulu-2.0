import { MoviesServiceService } from 'src/app/services/movies-service.service';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { TrendingComponent } from './trending.component';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('TrendingComponent', () => {
  let component: TrendingComponent;
  let fixture: ComponentFixture<TrendingComponent>;
  let moviesService: jasmine.SpyObj<MoviesServiceService>;

  beforeEach(async () => {
    moviesService = jasmine.createSpyObj('MoviesServiceService', ['getAllTrending']);

    moviesService.getAllTrending.and.returnValue(of({ results: [{ name: 'Ghosted' }, { name: 'The Super Mario Bros. Movie' }] }));

    await TestBed.configureTestingModule({
      declarations: [ TrendingComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: MoviesServiceService, useValue: moviesService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should fetch fiction movies', fakeAsync(() => {
    component.getAllTrendingMovies;
    tick();
    expect(component.movies.length).toBe(2);
    expect(component.movies[0].name).toBe('Ghosted');
    expect(component.movies[1].name).toBe('The Super Mario Bros. Movie');
  }));
});