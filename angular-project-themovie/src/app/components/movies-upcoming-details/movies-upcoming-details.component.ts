import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/_services/movie.service';

@Component({
  selector: 'app-movies-upcoming-details',
  templateUrl: './movies-upcoming-details.component.html',
  styleUrls: ['./movies-upcoming-details.component.css']
})
export class MoviesUpcomingDetailsComponent implements OnInit {

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
