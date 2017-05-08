import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DeezerService {
	public deezerAPI: string;

  constructor(public http: Http) {
  	// this.deezerAPI='https://api.deezer.com/';
  	this.deezerAPI='/deezerAPI/';
    console.log('Hello DeezerService Provider');
  }

  getProfilesId(){
  	return this.http.get("https://api.myjson.com/bins/w076v")
	  	.map(res => res.json())
	
	  	

	  	//Haciendo la peticion http usamos map para mapear el arra en formato json, suscribe seria como el metodo then de las promesas o response de jquery de ajax
	// this.http.get("https://api.myjson.com/bins/w076v")
	//   	.map(res => res.json())
	//   	.subscribe(users=>{
	//   		console.log(users);
	//   		users.map(usersID=> {
	//   			this.getUserDetail(usersID);
	//   		});
	//   	});
  }

  getUserDetail(userID){
  	return this.http.get(this.deezerAPI+'/user/'+userID)
	  	.map(res => res.json())
	
  }

  getUserPlaylists(userID){
  	return this.http.get(this.deezerAPI+'/user/'+userID+"/playlists")
	  	.map(res => res.json())
	
  }

  getPlaylistsSongs(playlistID){
  	return this.http.get(this.deezerAPI+'/playlist/'+playlistID+"/tracks")
	  	.map(res => res.json())
  }

}
