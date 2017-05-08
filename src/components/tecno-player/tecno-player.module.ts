import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TecnoPlayer } from './tecno-player';

@NgModule({
  declarations: [
    TecnoPlayer,
  ],
  imports: [
    IonicPageModule.forChild(TecnoPlayer),
  ],
  exports: [
    TecnoPlayer
  ]
})
export class TecnoPlayerModule {}
