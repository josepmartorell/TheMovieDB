import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesLatestDetailsComponent } from './components/movies-latest-details/movies-latest-details.component';
import { MoviesLatestComponent } from './components/movies-latest/movies-latest.component';
import { MoviesTopDetailsComponent } from './components/movies-top-details/movies-top-details.component';
import { MoviesTopComponent } from './components/movies-top/movies-top.component';
import { MoviesUpcomingDetailsComponent } from './components/movies-upcoming-details/movies-upcoming-details.component';
import { MoviesUpcomingComponent } from './components/movies-upcoming/movies-upcoming.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TvDetailsComponent } from './components/tv-details/tv-details.component';
import { TvLatestDetailsComponent } from './components/tv-latest-details/tv-latest-details.component';
import { TvLatestComponent } from './components/tv-latest/tv-latest.component';
import { TvTopDetailsComponent } from './components/tv-top-details/tv-top-details.component';
import { TvTopComponent } from './components/tv-top/tv-top.component';
import { TvUpcomingDetailsComponent } from './components/tv-upcoming-details/tv-upcoming-details.component';
import { TvUpcomingComponent } from './components/tv-upcoming/tv-upcoming.component';
import { TvComponent } from './components/tv/tv.component';
import { HomeDetailsComponent } from './home-details/home-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'top', component: MoviesTopComponent },
  { path: 'top/:id', component: MoviesTopDetailsComponent },
  { path: 'latest', component: MoviesLatestComponent },
  { path: 'latest/:id', component: MoviesLatestDetailsComponent }, //do not use
  { path: 'upcoming', component: MoviesUpcomingComponent },
  { path: 'upcoming/:id', component: MoviesUpcomingDetailsComponent },
  { path: 'tv', component: TvComponent },
  { path: 'tv/:id', component: TvDetailsComponent },
  { path: 'top_tv', component: TvTopComponent },
  { path: 'top_tv/:id', component: TvTopDetailsComponent },
  { path: 'latest_tv', component: TvLatestComponent },
  { path: 'latest_tv/:id', component: TvLatestDetailsComponent }, //do not use
  { path: 'upcoming_tv', component: TvUpcomingComponent },
  { path: 'upcoming_tv/:id', component: TvUpcomingDetailsComponent },
  { path: 'home/:id', component: HomeDetailsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
