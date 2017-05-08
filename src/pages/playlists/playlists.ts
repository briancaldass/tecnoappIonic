import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Canciones } from '../canciones/canciones';
import { DeezerService } from '../../providers/deezer-service';



@IonicPage()
@Component({
  selector: 'page-playlists',
  templateUrl: 'playlists.html',
  providers: [ DeezerService ],
})
export class Playlists {

	public user: any;
  public playlists: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ds: DeezerService) {
  	this.user = this.navParams.get('user');
  	this.playlists =[];
  }

  goToCanciones(playlists){
  	this.navCtrl.push(Canciones, {playlists:playlists});
  }

  
  

  ionViewDidLoad() {
    this.ds.getUserPlaylists(this.user.id).subscribe(data=>{
      this.playlists=data.data;
      console.log(this.playlists);
    });
  }

}
