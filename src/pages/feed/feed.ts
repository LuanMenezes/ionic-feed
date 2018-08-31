import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {MovieProvider} from "../../providers/movie/movie";

@IonicPage()
@Component({
	selector: 'page-feed',
	templateUrl: 'feed.html',
	providers: [
		MovieProvider
	]
})
export class FeedPage {
	private movies = new Array<any>();
	
	constructor(
			public navCtrl: NavController,
			public navParams: NavParams,
			private movieProvider: MovieProvider
	) {}
	
	ionViewDidLoad() {
		// this.movieProvider.getLatesMovies().subscribe(
		// 	(data) =>{
		// 		console.log(data);
		// 	},
		// 	(error) => {
		// 		console.error(error);
		// 	}
		// );
		
		this.movieProvider.getMovies().subscribe(
				(data) =>{
					this.movies = (data as any).results;
					console.log(this.movies);
				},
				(error) => {
					console.error(error);
				}
		);
	}
}
