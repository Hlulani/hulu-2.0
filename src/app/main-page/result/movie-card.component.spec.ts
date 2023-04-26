import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Movie } from 'src/app/shared/model';
import { MovieCardComponent } from './movie-card.component';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add movie to favorites on button click', () => {
    spyOn(component, 'onAddToFavorites');

    const addToFavoritesButton = fixture.debugElement.query(By.css('.btn'));
  
    addToFavoritesButton.nativeElement.click();
  
    fixture.detectChanges();
  
    expect(component.onAddToFavorites).toHaveBeenCalled();
  });

  it('should return true if the movie is a favorite', () => {
    const movie: Movie = { title: 'The Godfather', overview: 'Francis Ford Coppola', release_date: '1972' } as Movie;
    const favoriteMovies = [movie];
    localStorage.setItem('favouriteMovies', JSON.stringify(favoriteMovies));
    fixture.componentInstance.movie = movie;
    fixture.detectChanges();
    const div = fixture.debugElement.query(By.css('div'));
    expect(div).toBeTruthy();
  });

});
