import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Platform} from "ionic-angular";

/**
 * INJECTABLE é pq vai ser inserido via INJEÇÃO DE DEPENDENCIA
 * ou seja, sempre será usada em outra página
 */
@Injectable()
export class MovieProvider {
	private baseApiUrl = "/themoviedbapi";
	
	constructor(public http: HttpClient, private _platform: Platform) {
		if(this._platform.is("cordova")){
			this.baseApiUrl = "https://api.themoviedb.org/3/movie";
		}
	}
	
	getLatesMovie() {
		let url = this.baseApiUrl + "/latest?api_key=" + this.getApiKey() + "&language=pt-BR";
		return this.http.get(url);
	}
	
	getMovies(page = 1) {
		let url = this.baseApiUrl + "/popular?api_key=" + this.getApiKey() + "&language=pt-BR&page="+page;
		return this.http.get(url);
	}
	
	getMovieDetail(id) {
		let url = this.baseApiUrl + "/" + id +"?api_key=" + this.getApiKey() + "&language=pt-BR";
		return this.http.get(url);
	}
	
	getApiKey(): string {
		return "3d7aa99463bfea0007796cc0403f92b1";
	}
}
