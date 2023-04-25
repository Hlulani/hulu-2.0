import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Movie } from 'src/app/shared/model';

import { MovieCardComponent } from './movie-card.component';

xdescribe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit addToFavorites event', () => {
    spyOn(component.addToFavorites, 'emit');
    component.onAddToFavorites();
    expect(component.addToFavorites.emit).toHaveBeenCalled();
  });

  it('should add movie to favorite list', () => {
    const movie: Movie = {
      title: 'Test Movie',
      release_date: '2021-04-30',
      overview: 'this is a movie',
      poster_path: '..',
      media_type: '..',
    };
    component.movie = movie;
    component.onAddToFavorites();
    const favoriteMovies = localStorage.getItem('favouriteMovies');
    expect(favoriteMovies).toBeTruthy();
    const favoriteMoviesList = JSON.parse(favoriteMovies || '[]');
    expect(favoriteMoviesList).toContain(movie);
  });

  it('should remove movie from favorite list', () => {
    const movie: Movie = {
      title: 'Test Movie',
      release_date: '2021-04-30',
      overview: 'this is a movie',
      poster_path: '..',
      media_type: '..',
    };
    const favoriteMovies = [movie];
    localStorage.setItem('favouriteMovies', JSON.stringify(favoriteMovies));
    component.movie = movie;
    component.removeMoviesFromFavorite();
    const updatedFavoriteMovies = JSON.parse(
      localStorage.getItem('favouriteMovies') || '[]'
    );
    expect(updatedFavoriteMovies).not.toContain(movie);
  });

  it('should render addToFavorites button', () => {
    component.movie = {
      title: 'Test Movie',
      release_date: '2021-04-30',
      overview: 'this is a movie',
      poster_path: '..',
      media_type: '..',
    };
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.add-to-favorites'));
    expect(button.nativeElement.textContent.trim()).toBe('Add to Favorites');
  });
});
