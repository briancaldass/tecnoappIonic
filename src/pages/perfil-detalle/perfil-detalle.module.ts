import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilDetalle } from './perfil-detalle';

@NgModule({
  declarations: [
    PerfilDetalle,
  ],
  imports: [
    IonicPageModule.forChild(PerfilDetalle),
  ],
  exports: [
    PerfilDetalle
  ]
})
export class PerfilDetalleModule {}
