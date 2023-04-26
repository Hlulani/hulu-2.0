import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
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
      of({
        results: [
          { id: 1, title: 'Movie 1' },
          { id: 2, title: 'Movie 2' },
          { id: 3, title: 'Movie 3' },
        ],
      })
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
    expect(moviesService.getAllAction).toHaveBeenCalled();
  }));
});
