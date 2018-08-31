import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-feed',
	templateUrl: 'feed.html',
})
export class FeedPage {
	private nomeUsuario: string;
	private likes: number;
	
	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.nomeUsuario = "Luan Menezes";
		this.likes = 0;
	}
	
	ionViewDidLoad() {
		console.log('ionViewDidLoad FeedPage');
	}
	
	private addLikes(){
		this.likes ++;
	}
	
	private soma(numA: number, numB: number):number{
		let soma = numA + numB;
		alert("Resultado: "+ soma);
		return soma;
	}
}
