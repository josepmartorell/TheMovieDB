import { Component, OnInit } from '@angular/core';
import { TvService } from 'src/app/_services/tv.service';

@Component({
  selector: 'app-tv-upcoming-list',
  templateUrl: './tv-upcoming-list.component.html',
  styleUrls: ['./tv-upcoming-list.component.css']
})
export class TvUpcomingListComponent implements OnInit {

  numPage: number;
  list: any = []
  selectedFilter: string = ''

  constructor(private tvService: TvService) {
    this.numPage = 1;

  }

  ngOnInit(): void {
    this.loadOnTheAirTv()
  }

  loadOnTheAirTv() {
    this.tvService.getOnTheAirTv(this.numPage).subscribe(response => {
      console.log(response);
      this.list = response;
      this.selectedFilter = 'On The Air Series';
    },
      _error => {
        alert("se ha producido un error"),
          console.log(_error)
      });
  }

}
