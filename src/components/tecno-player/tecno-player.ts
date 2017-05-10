import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import {Events } from 'ionic-angular';

/**
 * Generated class for the TecnoPlayer component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'tecno-player',
  templateUrl: 'tecno-player.html'
})
export class TecnoPlayer implements OnInit, OnDestroy {

  // text: string;
	@Input() titulo : string;
	@Input() artista   : string;
	@Input() album  : string;
	@Input() cover : string;
	@Input() audioSrc : string;

	public audio: any;
	public ready : boolean;
	public playing : boolean;
	public audioPos : number;
	public audioDuration : number;

  constructor(public events: Events) {  
  	this.ready=false;  
  	this.playing=false; 
  	this.audioPos=0; 
  }

  ngOnInit(){
  	this.audio = new Audio();
  	this.audio.src = this.audioSrc;
  	this.audio.load();

  	this.audio.oncanplaythrough = ()=>{
  		this.ready= true;
  		this.audioDuration= this.audio.duration;
  	};

  	this.audio.ontimeupdate = (event) => {
  		this.audioPos = this.audio.currentTime;
  	}

  	this.audio.onended = () => {
  		this.audioPos=0;
  		this.playing=false;
  	}

    this.events.subscribe('cambio:volumen',(volumen)=>{
      this.audio.volume = volumen/100;
    });

  }

  ngOnDestroy(){
    this.events.unsubscribe('cambio:volumen');
  }

  togglePlay(){
  	
  	if(!this.playing)
  		this.audio.play();
  	else
		this.audio.pause();
  	

  	this.playing = !this.playing;
  }

}
