import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { Inicio } from '../pages/inicio/inicio';
import { Perfiles } from '../pages/perfiles/perfiles';
import { Contacto } from '../pages/contacto/contacto';
import { Acerca } from '../pages/acerca/acerca';


@NgModule({
  declarations: [
    MyApp,
    Inicio,
    Perfiles,
    Contacto,
    Acerca
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Inicio, 
    Perfiles,
    Contacto,
    Acerca
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
