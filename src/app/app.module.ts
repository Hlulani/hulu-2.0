import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './main-page/header/header.component';
import { NavComponent } from './main-page/nav/nav.component';
import { MovieCardComponent } from './main-page/result/movie-card.component';
import { TrendingComponent } from './main-page/nav/trending/trending.component';
import { FictionComponent } from './main-page/nav/fiction/fiction.component';
import { ActionComponent } from './main-page/nav/action/action.component';
import { FavoriteComponent } from './main-page/nav/favorite/favorite.component';
import { WatchListComponent } from './main-page/nav/watch-list/watch-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    NavComponent,
    MovieCardComponent,
    TrendingComponent,
    FictionComponent,
    ActionComponent,
    FavoriteComponent,
    WatchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
