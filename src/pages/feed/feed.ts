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
	private feed: object = {
		title: "Luan Menezes",
		date: "5 de Novembro",
		description: "Descrição do Feed",
		likes: 12,
		comments: 5,
		avatar: "assets/imgs/avatar.png",
		banner: "assets/imgs/bg-card.jpg"
	};
	
	constructor(
			public navCtrl: NavController,
			public navParams: NavParams,
			private movieProvider: MovieProvider
	) {}
	
	ionViewDidLoad() {
		this.movieProvider.getLatesMovies().subscribe(
			(data) =>{
				console.log(data);
			},
			(error) => {
				console.error(error);
			}
		);
	}
}
