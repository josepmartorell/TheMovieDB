import { Component, OnInit } from '@angular/core';
import { TOKEN, USERNAME } from '../constants';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token: string = ''

  user: any = {
    username: 'jetro',
    password: 'Ra*4'
  };


  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    if (window.sessionStorage.getItem(TOKEN)) {
      this.router.navigate(['/home'])
    } else {
      // otherwise, grab the token
      this.requestToken()
    }
  }

  requestToken(): void {

    this.authService.getToken().subscribe(
      response => {
        this.token = response.request_token
        console.log(this.token)
      }
    );
  }

  //create session with login
  login(): void {
    const data = {
      username: this.user.username,
      password: this.user.password,
      request_token: this.token
    };
    this.authService.signIn(data)
      .subscribe(
        response => {
          this.token = response;
          console.log('login successful', response);
          window.sessionStorage.setItem(TOKEN, response.request_token);
          window.sessionStorage.setItem(USERNAME, this.user.username);
          window.location.reload()

        },
        _error => {
          alert("Failed to Login :(")
          this.user = {
            username: '',
            password: ''
          };
        });
  }

}









