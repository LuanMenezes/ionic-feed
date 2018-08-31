import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {MovieProvider} from "../../providers/movie/movie";

@IonicPage()
@Component({
	selector: 'page-feed-detail',
	templateUrl: 'feed-detail.html',
	providers: [MovieProvider]
})
export class FeedDetailPage {
	private movie: object;
	
	constructor(
			public navCtrl: NavController,
			public navParams: NavParams,
			private movieProvider: MovieProvider
	) {
	}
	
	ionViewDidEnter() {
		let id = this.navParams.get("id");
		this.movieProvider.getMovieDetail(id).subscribe(
		(data) => {
			this.movie = data;
			console.log("MOVIE___",this.movie)
		},
		(error) => {
			console.error(error);
		});
	}
	
}
