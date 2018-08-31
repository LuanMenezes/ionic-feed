import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * INJECTABLE é pq vai ser inserido via INJEÇÃO DE DEPENDENCIA
 * ou seja, sempre será usada em outra página
 */
@Injectable()
export class MovieProvider {
  private apiKey = "3d7aa99463bfea0007796cc0403f92b1";
  private baseApiUrl = "https://api.themoviedb.org/3/movie/";
  
  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getLatesMovies(){
    let url = this.baseApiUrl + "latest?api_key=" + this.apiKey +"&language=pt-BR";
    return this.http.get(url);
  }
}
