import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Playlists } from '../playlists/playlists'; 
import { DeezerService } from '../../providers/deezer-service';
/**
 * Generated class for the Perfiles page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-perfiles',
  templateUrl: 'perfiles.html',
  providers: [ DeezerService ],
})
export class Perfiles {

  public users: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ds: DeezerService ) {
    this.users=[];
  }

  goToPlaylist(user){
  	this.navCtrl.push(Playlists, {user:user});
  }

  ionViewDidLoad() {
    this.ds.getProfilesId().subscribe(usersIDs =>{
      usersIDs.map(userID =>{
        this.ds.getUserDetail(userID).subscribe(user =>{
          this.users.push(user);
        });
      });
    });  
  }

}
