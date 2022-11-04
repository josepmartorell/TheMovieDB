import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../_services/movie.service';

@Component({
  selector: 'app-movies-top-list',
  templateUrl: './movies-top-list.component.html',
  styleUrls: ['./movies-top-list.component.css']
})
export class MoviesTopListComponent implements OnInit {

  numPage: number;
  list: any = []
  selectedFilter: string = ''


  constructor(private movieService: MovieService) {
    this.numPage = 0;

  }

  ngOnInit(): void {
    this.loadTopRatedMovies()
  }

  loadTopRatedMovies() {
    this.movieService.getTopRatedMovies(++this.numPage).subscribe(response => {
      console.log(response);
      this.list = response;
      this.selectedFilter = 'Top Rated';
    },
      _error => {
        alert("se ha producido un error"),
          console.log(_error)
      });
  }

  unloadTopRatedMovies() {
    if (this.numPage > 1) {
      this.movieService.getTopRatedMovies(--this.numPage).subscribe(response => {
        console.log(response);
        this.list = response;
        this.selectedFilter = 'Top Rated';
      },
        _error => {
          alert("se ha producido un error"),
            console.log(_error)
        });
    }

  }

  loadSpecificPage(page: number){
    this.movieService.getTopRatedMovies(page).subscribe(response => {
      console.log(response);
      this.list = response;
      this.selectedFilter = 'Top Rated';
      this.numPage = page
    },
      _error => {
        alert("se ha producido un error"),
          console.log(_error)
      });

  }

}
