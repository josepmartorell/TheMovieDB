import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_KEY, BASE_API } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getToken(): Observable<any> {
    return this.http.get(BASE_API + 'authentication/token/new?api_key=' + API_KEY)

  }

  signIn(data: any): Observable<any> {
    return this.http.post(BASE_API + 'authentication/token/validate_with_login?api_key=' + API_KEY, data)
  }


}
