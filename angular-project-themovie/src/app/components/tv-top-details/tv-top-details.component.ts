import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TvService } from 'src/app/_services/tv.service';

@Component({
  selector: 'app-tv-top-details',
  templateUrl: './tv-top-details.component.html',
  styleUrls: ['./tv-top-details.component.css']
})
export class TvTopDetailsComponent implements OnInit {

  tv: any;

  constructor(private tvService: TvService, public router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadTvSerie();

  }

  loadTvSerie(){
    let id = this.activatedRoute.snapshot.params['id'];
    this.tvService.getById(id).subscribe(
      (res) => {
        this.tv = res;
      },
      (error) => {
        console.log('Error al cargar datos', error);
      }
    );

  }

}
