import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {MovieProvider} from "../../providers/movie/movie";
import {FeedDetailPage} from "../feed-detail/feed-detail";

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

	private page: number = 1;
	private infiniteScroll;
	
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
	
	doInfinite(infinite){
		this.page++;
		this.infiniteScroll = infinite;
		this.getMovies(true);
	}
	
	getMovies(newpage:boolean = false){
		this.movieProvider.getMovies(this.page).subscribe(
		(data) => {
			let results = (data as any).results;
			if(newpage){
				this.movies = this.movies.concat(results)
				this.infiniteScroll.complete();
			}else{
				this.movies = results;
			}
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
	
	detail(id){
		this.navCtrl.push(FeedDetailPage, {id: id});
	}
	
	ionViewDidEnter() {
		this.loading();
		this.getMovies();
	}
}
