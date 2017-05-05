import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Canciones } from '../canciones/canciones';


@IonicPage()
@Component({
  selector: 'page-playlists',
  templateUrl: 'playlists.html',
})
export class Playlists {

	public userID: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.userID = this.navParams.get('userID');
  	console.log(this.userID);
  }

  goToCanciones(playlistsID){
  	this.navCtrl.push(Canciones, {playlistsID:playlistsID});
  }

  
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad Playlists');
  }

}
