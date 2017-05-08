import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeezerService } from '../../providers/deezer-service';
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
   providers: [ DeezerService ],
})
export class Canciones {

	public playlist: any;
  public songs: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ds: DeezerService) {
  	this.playlist = this.navParams.get('playlists');

  	this.songs=[];
  }

  ionViewDidLoad() {
    this.ds.getPlaylistsSongs(this.playlist.id).subscribe(data=>{
      this.songs=data.data;
 
    });
  }

}
