import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule} from '@angular/http';

import { MyApp } from './app.component';
import { Inicio } from '../pages/inicio/inicio';
import { Perfiles } from '../pages/perfiles/perfiles';
import { Contacto } from '../pages/contacto/contacto';
import { Acerca } from '../pages/acerca/acerca';

import { Playlists } from '../pages/playlists/playlists';
import { Canciones } from '../pages/canciones/canciones';


@NgModule({
  declarations: [
    MyApp,
    Inicio,
    Perfiles,
    Contacto,
    Acerca,
    Playlists,
    Canciones
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Inicio, 
    Perfiles,
    Contacto,
    Acerca,
    Playlists,
    Canciones
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
