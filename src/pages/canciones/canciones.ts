import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Canciones page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-canciones',
  templateUrl: 'canciones.html',
})
export class Canciones {

	public playlistsID: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.playlistsID = this.navParams.get('playlistsID');
  	console.log(this.playlistsID);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Canciones');
  }

}
