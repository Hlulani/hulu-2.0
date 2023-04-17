import { FavoriteComponent } from './main-page/nav/favorite/favorite.component';
import { WatchListComponent } from './main-page/nav/watch-list/watch-list.component';
import { ActionComponent } from './main-page/nav/action/action.component';
import { FictionComponent } from './main-page/nav/fiction/fiction.component';
import { TrendingComponent } from './main-page/nav/trending/trending.component';
import { NavComponent } from './main-page/nav/nav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'nav',
    component: NavComponent,
  },
  {
    path: '',
    component: TrendingComponent,
  },
  {
    path: 'fiction',
    component: FictionComponent,
  },
  {
    path: 'action',
    component: ActionComponent,
  },
  {
    path: 'watch-list',
    component: WatchListComponent,
  },
  {
    path: 'favourite',
    component: FavoriteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
