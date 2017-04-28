import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contacto } from './contacto';

@NgModule({
  declarations: [
    Contacto,
  ],
  imports: [
    IonicPageModule.forChild(Contacto),
  ],
  exports: [
    Contacto
  ]
})
export class ContactoModule {}
