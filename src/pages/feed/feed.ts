import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
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
	private movies: Array<any>;
	private loader: any;
	private refresher: any;
	private isRefresher: boolean = false;
	
	constructor(
			public navCtrl: NavController,
			public navParams: NavParams,
			private movieProvider: MovieProvider,
			private loaderCtrl: LoadingController
	) {
	}
	
	loading() {
		this.loader = this.loaderCtrl.create({
			content: "Carregando Feeds ..."
		});
		this.loader.present();
	}
	
	closing() {
		this.loader.dismiss();
	}
	
	doRefresh(refresher){
		this.refresher = refresher;
		this.isRefresher = true;
		
		this.loading();
		this.getMovies();
	}
	
	getMovies(){
		this.movies = [];
		this.movieProvider.getMovies().subscribe(
		(data) => {
			this.movies = (data as any).results;
			this.closing();
			if(this.isRefresher){
				this.refresher.complete();
				this.isRefresher = false;
			}
		},
		(error) => {
			console.error(error);
			this.closing();
			if(this.isRefresher){
				this.refresher.complete();
				this.isRefresher = false;
			}
		});
	}
	
	ionViewDidEnter() {
		this.loading();
		this.getMovies();
	}
}
