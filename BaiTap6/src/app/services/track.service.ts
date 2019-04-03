import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Track } from '../models/track.class';
import { Observable} from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private API = 'https://api.spotify.com/v1/artists/';
  constructor(
    private _httpClient: HttpClient,
    private _tokenService: TokenService
  ) { }
  getTrack(idArtist: string): Observable<Track> {
    let headers = this._tokenService.getHeader();
    let url = this.API + idArtist + '/top-tracks?country=vn';
    return this._httpClient.get<Track>(url, {headers: headers});
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
