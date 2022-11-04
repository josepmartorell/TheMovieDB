import { Component, OnInit } from '@angular/core';
import { TvService } from 'src/app/_services/tv.service';

@Component({
  selector: 'app-tv-list',
  templateUrl: './tv-list.component.html',
  styleUrls: ['./tv-list.component.css']
})
export class TvListComponent implements OnInit {

  numPage: number;
  list: any = []
  selectedFilter: string = ''

  constructor(private tvservice: TvService) {
    this.numPage = 0
   }

  ngOnInit(): void {
    this.loadPopularTv()
  }

  loadPopularTv(){
    this.tvservice.getPopularTv(++this.numPage)
      .subscribe(response =>{this.list = response;
        this.selectedFilter = 'Popular Series';
        console.log(response);
      },
      _error => {
        alert("se ha producido un error"),
          console.log(_error)
      });
  }

  unloadPopularTv() {
    if (this.numPage > 1) {
      this.tvservice.getPopularTv(--this.numPage).subscribe(response => {
        console.log(response);
        this.list = response;
        this.selectedFilter = 'Popular Series';
      },
        _error => {
          alert("se ha producido un error"),
            console.log(_error)
        });
    }

  }

  loadSpecificPage(page: number){
    this.tvservice.getPopularTv(page).subscribe(response => {
      console.log(response);
      this.list = response;
      this.selectedFilter = 'Popular Series';
      this.numPage = page
    },
      _error => {
        alert("se ha producido un error"),
          console.log(_error)
      });

  }

}
