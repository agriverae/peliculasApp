import { Injectable } from '@angular/core';
import { Jsonp } from "@angular/http";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey:string = '257889333e2a98d76029a6977fade69f';
  private urlMoviedb:string = 'https://api.themoviedb.org/3';

  constructor( private jsonp: Jsonp) { }

  getPopulares() {
    let url = `${this.urlMoviedb}/discover/movie?api_key=${this.apikey}&language=es&sort_by=popularity.desc&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).pipe(map( res => res.json()));
  }

  buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url ).pipe(map( res=> res.json()));
  }

}
