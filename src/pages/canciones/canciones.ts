import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, PopoverController } from 'ionic-angular';
import { DeezerService } from '../../providers/deezer-service';
import { CancionPopover } from '../cancion-popover/cancion-popover';
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
  public loader: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public ds: DeezerService, public LoadingCtrl: LoadingController, public popoverContrlr:PopoverController ) {
  	this.playlist = this.navParams.get('playlists');
    this.loader=LoadingCtrl.create({
      content: 'Cargando...'
    });    
  	this.songs=[];
  }

  ionViewDidLoad() {
    this.loader.present();
    this.ds.getPlaylistsSongs(this.playlist.id).subscribe(data=>{
      this.songs=data.data;
      this.loader.dismiss()  
    });
  }

  openCancionPopover(event){
    let popover = this.popoverContrlr.create(CancionPopover);
    popover.present({
      ev: event
    });
  }

}
