import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/_services/movie.service';

@Component({
  selector: 'app-movies-top-details',
  templateUrl: './movies-top-details.component.html',
  styleUrls: ['./movies-top-details.component.css']
})
export class MoviesTopDetailsComponent implements OnInit {

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
