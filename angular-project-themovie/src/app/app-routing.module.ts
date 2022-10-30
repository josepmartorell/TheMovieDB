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
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'movie/:id', component: MovieDetailsComponent},
  { path: 'movies', component: MoviesComponent},
  { path: 'top', component: MoviesTopComponent},
  { path: 'latest', component: MoviesLatestComponent},
  { path: 'upcoming', component: MoviesUpcomingComponent},
  { path: 'top/:id', component: MoviesTopDetailsComponent},
  { path: 'latest/:id', component: MoviesLatestDetailsComponent},
  { path: 'upcoming/:id', component: MoviesUpcomingDetailsComponent} 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
