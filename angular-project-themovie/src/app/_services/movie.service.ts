import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { API_KEY, BASE_API } from '../constants';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  /*getAll*/

  //películas populares
  getPopularMovies(page: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(BASE_API + 'movie/popular?api_key=' + API_KEY + '&language=en-US&page=' + page);
  }
  //películas mejor calificadas
  getTopRatedMovies(page: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(BASE_API + 'movie/top_rated?api_key=' + API_KEY + '&language=en-US&page=' + page);
  }
  //recientes producciones
  getLatestMovies(page: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(BASE_API + 'movie/latest?api_key=' + API_KEY + '&language=en-US&page=' + page);
  }
  //proximamente en los cines
  getUpcomingMovies(page: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(BASE_API + 'movie/upcoming?api_key=' + API_KEY + '&language=en-US&page=' + page);
  }

  /*get*/

  //obtener detalle película por id
  getById(id: any): Observable<Movie> {
    return this.http.get(`${BASE_API}/movie/${id}?api_key=${API_KEY}&language=en-US`);
  }
  //búsqueda detalle película por título
  findByTitle(title: any): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${BASE_API}?title=${title}?api_key=${API_KEY}&language=en-US`);
  }
}
