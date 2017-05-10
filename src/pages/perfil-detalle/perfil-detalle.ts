import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the PerfilDetalle page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-perfil-detalle',
  templateUrl: 'perfil-detalle.html',
})
export class PerfilDetalle {

	user: any;
	playlists: any;
	totalcanciones: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  	this.user = this.navParams.get('user');
  	this.playlists = this.navParams.get('playlists');
  	this.totalcanciones=0;
  	this.playlists.map(playlist => this.totalcanciones += playlist.nb_tracks);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilDetalle');
  }

  close(){
  	this.viewCtrl.dismiss({retornar: "Parámetros"});
  }
}
