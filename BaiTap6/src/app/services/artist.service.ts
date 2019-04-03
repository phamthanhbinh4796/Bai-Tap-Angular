import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Artist } from '../models/artist.class';
import { Observable} from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private API = 'https://api.spotify.com/v1/search?q=';
  constructor(
    private _httpClient: HttpClient,
    private _tokenService: TokenService
  ) { }
  public artists: Artist[] = [];
  getArtist(nameArtist: string): Observable<Artist> { 
    let headers = this._tokenService.getHeader();
    let url = this.API + nameArtist + '&type=artist';
    return this._httpClient.get<Artist>(url, {headers: headers});
  }
  handleError(err) {
    if (err.error instanceof Error) {
      console.log('Client-side error: ${err.error.message}');
    }
    else {
      console.log(`Server-side error: ${err.status} - ${err.error}`);
    }
  }
}
