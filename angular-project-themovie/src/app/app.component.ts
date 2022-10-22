import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { USERNAME } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project-themovie';
  user : any;

  constructor(private router: Router){}

  ngOnInit(): void {
    this.user = window.sessionStorage.getItem(USERNAME)
    if(this.user == undefined)
      this.router.navigate(['/login'])
    console.log(this.user)
  }

  logout(): void {
    window.sessionStorage.clear();
    this.user = undefined;
    this.router.navigate(['/login']);
  }
}


