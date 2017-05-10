import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the Contacto page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class Contacto {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Contacto');
  }

  enviar(){
  	let alert = this.alertCtrl.create({
  		title: "Ccntacto",
  		subTitle: "Tu petición ha sido enviada con éxito",
  		buttons:['OK']
  	});
  	alert.present();
  }

}
