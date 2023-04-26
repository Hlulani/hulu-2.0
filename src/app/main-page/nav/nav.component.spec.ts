import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavComponent } from './nav.component';
import { Location } from '@angular/common';
import { of } from 'rxjs';
import { MoviesServiceService } from 'src/app/services/movies-service.service';

xdescribe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let moviesServiceSpy: jasmine.SpyObj<MoviesServiceService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('MoviesServiceService', [
      'getAllTrending',
      'getAllFiction',
      'getAllAction',
      'searchMovies',
    ]);

    await TestBed.configureTestingModule({
      declarations: [NavComponent],
      providers: [Location, { provide: MoviesServiceService, useValue: spy }],
    }).compileComponents();

    moviesServiceSpy = TestBed.inject(
      MoviesServiceService
    ) as jasmine.SpyObj<MoviesServiceService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAllTrending when path is "/"', () => {
    const location = TestBed.inject(Location);
    spyOn(location, 'path').and.returnValue('/');
    moviesServiceSpy.getAllTrending.and.returnValue(of({ results: [] }));
    component.getAllMovies();
    expect(moviesServiceSpy.getAllTrending).toHaveBeenCalled();
  });

  it('should call getAllFiction when path is "/fiction"', () => {
    const location = TestBed.inject(Location);
    spyOn(location, 'path').and.returnValue('/fiction');
    moviesServiceSpy.getAllFiction.and.returnValue(of({ results: [] }));
    component.getAllMovies();
    expect(moviesServiceSpy.getAllFiction).toHaveBeenCalled();
  });

  it('should call getAllAction when path is "/action"', () => {
    const location = TestBed.inject(Location);
    spyOn(location, 'path').and.returnValue('/action');
    moviesServiceSpy.getAllAction.and.returnValue(of({ results: [] }));
    component.getAllMovies();
    expect(moviesServiceSpy.getAllAction).toHaveBeenCalled();
  });

  it('should call searchMovies when filterMovies is called with a non-empty query', () => {
    component.searchQuery = 'test';
    moviesServiceSpy.searchMovies.and.returnValue(of([]));
    component.filterMovies();
    expect(moviesServiceSpy.searchMovies).toHaveBeenCalled();
  });

  it('should call getAllMovies when filterMovies is called with an empty query', () => {
    component.searchQuery = '';
    spyOn(component, 'getAllMovies');
    component.filterMovies();
    expect(component.getAllMovies).toHaveBeenCalled();
  });

  it('should unsubscribe from moviesData$ when component is destroyed', () => {
    spyOn(moviesServiceSpy.moviesData$, 'unsubscribe');
    component.ngOnDestroy();
    expect(moviesServiceSpy.moviesData$.unsubscribe).toHaveBeenCalled();
  });
});
