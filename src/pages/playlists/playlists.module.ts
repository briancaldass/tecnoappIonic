import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Playlists } from './playlists';

@NgModule({
  declarations: [
    Playlists,
  ],
  imports: [
    IonicPageModule.forChild(Playlists),
  ],
  exports: [
    Playlists
  ]
})
export class PlaylistsModule {}
