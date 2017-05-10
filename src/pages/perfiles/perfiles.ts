import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Playlists } from '../playlists/playlists'; 
import { DeezerService } from '../../providers/deezer-service';
import { Observable } from 'rxjs/Rx';
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
  public loader: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ds: DeezerService, public LoadingCtrl: LoadingController ) {
    this.users=[];
    this.loader=LoadingCtrl.create({
      content: '<div class="box loading"></div>'
    });    
  }

  goToPlaylist(user){
  	this.navCtrl.push(Playlists, {user:user});
  }

  ionViewDidLoad() {
    this.loader.present();
    // this.loader.dismiss();
    this.ds.getProfilesId().subscribe(usersIDs =>{
      // usersIDs.map(userID =>{
      //   this.ds.getUserDetail(userID).subscribe(user =>{
      //     this.users.push(user);
      //   });
      // });
      let sources = usersIDs.map(userID =>this.ds.getUserDetail(userID) );
      Observable.merge(...sources).subscribe(
        data =>  this.users.push(data),
        error => console.log(error),
        () => this.loader.dismiss() 
       );
    });  
  }

}
