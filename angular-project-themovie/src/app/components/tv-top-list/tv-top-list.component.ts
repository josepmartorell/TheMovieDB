import { Component, OnInit } from '@angular/core';
import { TvService } from 'src/app/_services/tv.service';

@Component({
  selector: 'app-tv-top-list',
  templateUrl: './tv-top-list.component.html',
  styleUrls: ['./tv-top-list.component.css']
})
export class TvTopListComponent implements OnInit {

  numPage: number;
  list: any = []
  selectedFilter: string = ''


  constructor(private tvService: TvService) {
    this.numPage = 1;

  }

  ngOnInit(): void {
    this.loadTopRatedTv()
  }

  loadTopRatedTv() {
    this.tvService.getTopRatedTv(this.numPage).subscribe(response => {
      console.log(response);
      this.list = response;
      this.selectedFilter = 'Top Rated Series';
    },
      _error => {
        alert("se ha producido un error"),
          console.log(_error)
      });
  }

}
