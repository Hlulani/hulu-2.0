import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { of } from 'rxjs';
import { MoviesServiceService } from 'src/app/services/movies-service.service';

import { ActionComponent } from './action.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ActionComponent', () => {
  let component: ActionComponent;
  let fixture: ComponentFixture<ActionComponent>;
  let moviesService: jasmine.SpyObj<MoviesServiceService>;

  beforeEach(async () => {
    moviesService = jasmine.createSpyObj('MoviesServiceService', [
      'getAllAction',
    ]);

    moviesService.getAllAction.and.returnValue(
      of({ results: [{ name: 'The Dark Knight' }, { name: 'Inception' }] })
    );

    await TestBed.configureTestingModule({
      declarations: [ActionComponent],
      imports: [HttpClientTestingModule],
      providers: [{ provide: MoviesServiceService, useValue: moviesService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should fetch action movies', fakeAsync(() => {
    component.getAllActionMovies();
    tick();
    expect(component.movies.length).toBe(2);
    expect(component.movies[0].name).toBe('The Dark Knight');
    expect(component.movies[1].name).toBe('Inception');
  }));
});
