import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../_services/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  numPage: number;
  list: any = []
  selectedFilter: string = ''


  constructor(private movieService: MovieService) {
    this.numPage = 1;

  }

  ngOnInit(): void {
    this.loadPopularMovies()
  }

  loadPopularMovies() {
    this.movieService.getPopularMovies(this.numPage).subscribe(response => {
      console.log(response);
      this.list = response;
      this.selectedFilter = 'Popular';
    },
      _error => {
        alert("se ha producido un error"),
          console.log(_error)
      });
  }


}
