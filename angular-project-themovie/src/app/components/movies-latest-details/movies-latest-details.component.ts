import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/_services/movie.service';

@Component({
  selector: 'app-movies-latest-details',
  templateUrl: './movies-latest-details.component.html',
  styleUrls: ['./movies-latest-details.component.css']
})
export class MoviesLatestDetailsComponent implements OnInit {

  movie: any;

  constructor(private movieService: MovieService, public router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.movieService.getById(id).subscribe(
      (res) => {
        this.movie = res;
      },
      (error) => {
        console.log('Error al cargar datos', error);
      }
    );
  }

}
