import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/_services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-latest-list',
  templateUrl: './movies-latest-list.component.html',
  styleUrls: ['./movies-latest-list.component.css']
})
export class MoviesLatestListComponent implements OnInit {

  numPage: number;
  list: any = []
  selectedFilter: string = ''


  constructor(private movieService: MovieService, public router: Router) {
    this.numPage = 1;

  }

  ngOnInit(): void {
    this.loadLatestMovies()
  }

  loadLatestMovies() {
    this.movieService.getLatestMovies(this.numPage).subscribe(response => {
      console.log(response);
      this.list = response;
      this.selectedFilter = 'Latest';
    },
      _error => {
        alert("se ha producido un error"),
          console.log(_error)
      });
  }

}
