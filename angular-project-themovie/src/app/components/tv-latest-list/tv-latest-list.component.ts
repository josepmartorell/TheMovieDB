import { Component, OnInit } from '@angular/core';
import { TvService } from 'src/app/_services/tv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tv-latest-list',
  templateUrl: './tv-latest-list.component.html',
  styleUrls: ['./tv-latest-list.component.css']
})
export class TvLatestListComponent implements OnInit {

  numPage: number;
  list: any = []
  selectedFilter: string = ''


  constructor(private tvService: TvService, public router: Router) {
    this.numPage = 1;

  }

  ngOnInit(): void {
    this.loadLatestTv()
  }

  loadLatestTv() {
    this.tvService.getLatestTv(this.numPage).subscribe(response => {
      console.log(response);
      this.list = response;
      this.selectedFilter = 'Latest Series';
    },
      _error => {
        alert("se ha producido un error"),
          console.log(_error)
      });
  }

}
