import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private router: Router,
    private videoService: VideoService
  ) { }

  ngOnInit() {
  }
  searchVideo(value) {
    localStorage.setItem('keySearch', value.target.value);
    let url = `/video/search/${value.target.value}`;
    this.router.navigateByUrl(url);
  }
}
