import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../_services/movie.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css']
})
export class HomeDetailsComponent implements OnInit {

  movie: any;

  constructor(private movieService: MovieService, public router: Router, private activatedRoute: ActivatedRoute, private _location: Location) { }

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

  goBack(){
    this._location.back();
  }

}
