import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/_services/movie.service';

@Component({
  selector: 'app-movies-upcoming-list',
  templateUrl: './movies-upcoming-list.component.html',
  styleUrls: ['./movies-upcoming-list.component.css']
})
export class MoviesUpcomingListComponent implements OnInit {

  numPage: number;
  list: any = []
  selectedFilter: string = ''


  constructor(private movieService: MovieService) {
    this.numPage = 0;

  }

  ngOnInit(): void {
    this.loadUpcomingMovies()
  }

  loadUpcomingMovies() {
    this.movieService.getUpcomingMovies(++this.numPage).subscribe(response => {
      console.log(response);
      this.list = response;
      this.selectedFilter = 'Upcoming';
    },
      _error => {
        alert("se ha producido un error"),
          console.log(_error)
      });
  }

  unloadUpcomingMovies() {
    if (this.numPage > 1) {
      this.movieService.getUpcomingMovies(--this.numPage).subscribe(response => {
        console.log(response);
        this.list = response;
        this.selectedFilter = 'Upcoming';
      },
        _error => {
          alert("se ha producido un error"),
            console.log(_error)
        });
    }

  }

  loadSpecificPage(page: number){
    this.movieService.getUpcomingMovies(page).subscribe(response => {
      console.log(response);
      this.list = response;
      this.selectedFilter = 'Upcoming';
      this.numPage = page
    },
      _error => {
        alert("se ha producido un error"),
          console.log(_error)
      });

  }

}
