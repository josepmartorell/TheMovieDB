import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tv } from '../models/tv.model';
import { API_KEY, BASE_API } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor(private http: HttpClient) { }

    /*getAll*/

  //películas populares
  getPopularTv(page: number): Observable<Tv[]> {
    return this.http.get<Tv[]>(BASE_API + 'tv/popular?api_key=' + API_KEY + '&language=en-US&page=' + page);
  }
  //películas mejor calificadas
  getTopRatedTv(page: number): Observable<Tv[]> {
    return this.http.get<Tv[]>(BASE_API + 'tv/top_rated?api_key=' + API_KEY + '&language=en-US&page=' + page);
  }
  //recientes producciones
  getLatestTv(page: number): Observable<Tv[]> {
    return this.http.get<Tv[]>(BASE_API + 'tv/latest?api_key=' + API_KEY + '&language=en-US&page=' + page);
  }
  //proximamente en los cines
  getOnTheAirTv(page: number): Observable<Tv[]> {
    return this.http.get<Tv[]>(BASE_API + 'tv/on_the_air?api_key=' + API_KEY + '&language=en-US&page=' + page);
  }

  /*get*/

  //obtener detalle película por id
  getById(id: any): Observable<Tv> {
    return this.http.get(`${BASE_API}/tv/${id}?api_key=${API_KEY}&language=en-US`);
  }
  //búsqueda detalle serie por título
  findByTitle(query: any): Observable<Tv[]> {
    return this.http.get<Tv[]>(`${BASE_API}/search/tv?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
  }
  
}
