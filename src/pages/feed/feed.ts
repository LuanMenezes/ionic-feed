import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-feed',
	templateUrl: 'feed.html',
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
	
	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}
	
	ionViewDidLoad() {
		console.log('ionViewDidLoad FeedPage');
	}
}
