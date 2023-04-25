import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MoviesServiceService } from 'src/app/services/movies-service.service';

import { FictionComponent } from './fiction.component';
import { of } from 'rxjs';

describe('FictionComponent', () => {
  let component: FictionComponent;
  let fixture: ComponentFixture<FictionComponent>;
  let moviesService: jasmine.SpyObj<MoviesServiceService>;

  beforeEach(async () => {
    moviesService = jasmine.createSpyObj('MoviesServiceService', ['getAllFiction']);

    moviesService.getAllFiction.and.returnValue(of({ results: [{ name: 'Ghosted' }, { name: 'The Super Mario Bros. Movie' }] }));

    await TestBed.configureTestingModule({
      declarations: [ FictionComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: MoviesServiceService, useValue: moviesService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should fetch fiction movies', fakeAsync(() => {
    component.getAllFictionMovies;
    tick();
    expect(component.movies.length).toBe(2);
    expect(component.movies[0].name).toBe('Ghosted');
    expect(component.movies[1].name).toBe('The Super Mario Bros. Movie');
  }));
});