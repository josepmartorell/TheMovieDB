import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../_services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  search: string;
  list: any = []
  selectedFilter: string = ''


  constructor(private movieService: MovieService, private router: Router) {
    this.search = '';

  }

  ngOnInit(): void {
    this.selectedFilter = 'By Title';
  }

  loadByTitle() {
    if (this.search != '') {
      this.movieService.findByTitle(this.search).subscribe(response => {
        console.log(response);
        this.list = response;
        this.router.navigate(['/home'])
      },
        _error => {
          alert("se ha producido un error"),
            console.log(_error)
        });
      
    }

  }

}
