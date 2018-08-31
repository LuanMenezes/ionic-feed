import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ProfilePage} from "../profile/profile";
import {AboutPage} from "../about/about";

/**
 * Generated class for the ConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-config',
	templateUrl: 'config.html',
})
export class ConfigPage {
	rootPage = ProfilePage;
	
	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}
	
	ionViewDidLoad() {
		console.log('ionViewDidLoad ConfigPage');
	}
	
	openProfile() {
		this.navCtrl.push(ProfilePage);
	}
	
	openAbout() {
		this.navCtrl.push(AboutPage);
	}
}
