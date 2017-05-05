import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DeezerService {

  constructor(public http: Http) {
    console.log('Hello DeezerService Provider');
  }

  getProfilesId(){
  	this.http.get('http://api.deezer.com/user/2529')
  	.map(res => res.json())
  	.subscribe(data=>{
  		console.log(data);
  	});
  }

}
