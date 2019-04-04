import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../models/video.class';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  public videos: Video[] = [];
  private KEY = 'AIzaSyBFgra40hV2CTEW9WPiF45UXgiMJaV2EHU';
  public keySearch: string;
  constructor(
    private httpClient: HttpClient
  ) { }
  getListVideo(nameVideo: string): Observable<Video> {
    let url = 'https://www.googleapis.com/youtube/v3/search';
    return this.httpClient.get<Video>(url, {params: {
      q: nameVideo,
      key: this.KEY,
      part: 'snippet',
      maxResults: '20',
      type: 'video'
    }});
  }
  getListVideoSort(nameVideo: string, sort: string): Observable<Video> {
    let url = 'https://www.googleapis.com/youtube/v3/search';
    return this.httpClient.get<Video>(url, {params: {
      q: nameVideo,
      key: this.KEY,
      part: 'snippet',
      maxResults: '20',
      order: sort
    }});
  }
  getVideoById(id: string): Observable<Video> {
    let url = 'https://www.googleapis.com/youtube/v3/videos';
    return this.httpClient.get<Video>(url, {params: {
      id: id,
      part: 'snippet',
      key: this.KEY
    }});
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
