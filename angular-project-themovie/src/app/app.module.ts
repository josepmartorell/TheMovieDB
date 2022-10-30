import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesTopComponent } from './components/movies-top/movies-top.component';
import { MoviesTopListComponent } from './components/movies-top-list/movies-top-list.component';
import { MoviesTopDetailsComponent } from './components/movies-top-details/movies-top-details.component';
import { MoviesLatestComponent } from './components/movies-latest/movies-latest.component';
import { MoviesLatestListComponent } from './components/movies-latest-list/movies-latest-list.component';
import { MoviesLatestDetailsComponent } from './components/movies-latest-details/movies-latest-details.component';
import { MoviesUpcomingComponent } from './components/movies-upcoming/movies-upcoming.component';
import { MoviesUpcomingListComponent } from './components/movies-upcoming-list/movies-upcoming-list.component';
import { MoviesUpcomingDetailsComponent } from './components/movies-upcoming-details/movies-upcoming-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    MoviesComponent,
    MoviesTopComponent,
    MoviesTopListComponent,
    MoviesTopDetailsComponent,
    MoviesLatestComponent,
    MoviesLatestListComponent,
    MoviesLatestDetailsComponent,
    MoviesUpcomingComponent,
    MoviesUpcomingListComponent,
    MoviesUpcomingDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
