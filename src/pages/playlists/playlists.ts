import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { Canciones } from '../canciones/canciones';
import { PerfilDetalle } from '../perfil-detalle/perfil-detalle';
import { DeezerService } from '../../providers/deezer-service';
import { Observable } from 'rxjs/Rx';



@IonicPage()
@Component({
  selector: 'page-playlists',
  templateUrl: 'playlists.html',
  providers: [ DeezerService ],
})
export class Playlists {

	public user: any;
  public playlists: any;
  public loader: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ds: DeezerService, public LoadingCtrl: LoadingController, public ModalCtrl: ModalController ) {
  	this.user = this.navParams.get('user');
    this.loader=LoadingCtrl.create({
      content: 'Cargando...'
    });    
  	this.playlists =[];
  }

  goToCanciones(playlists){
  	this.navCtrl.push(Canciones, {playlists:playlists});
  } 
  

  ionViewDidLoad() {
    this.loader.present();
    this.ds.getUserPlaylists(this.user.id).subscribe(data=>{
      this.playlists=data.data;
      this.loader.dismiss() 
    });
  }

  goToPerfilDetalle(user, playlists){
    let modal = this.ModalCtrl.create(PerfilDetalle, {
      user: user,
      playlists: playlists
    });
    modal.present();
    modal.onDidDismiss(data=>console.log(data));
  }

}
