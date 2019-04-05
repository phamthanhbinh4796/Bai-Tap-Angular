import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../../models/video.class';
import { VideoService } from '../../services/video.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css']
})
export class VideolistComponent implements OnInit {

  private videos: Video[] = [];
  private name: string;
  private subscription: Subscription;
  private keySearch: string;
  private sort = '';
  constructor(
    private activatedRouter: ActivatedRoute,
    private videoService: VideoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getListVideo();
    this.getListSort();
  }
  getListVideo() { 
    return this.activatedRouter.params.subscribe(x => {
      this.sort = '';
      this.name = x.name;
      this.subscription = this.videoService.getListVideo(this.name).subscribe(data => {
        this.videos = data.items;
        this.videoService.videos = data.items;
        localStorage.setItem('listSearch', JSON.stringify(data.items));
      }, error => {
        this.videoService.handleError(error);
      });
    });
  }
  getListSort() {
    this.activatedRouter.queryParams.subscribe(param => {
      if (param['sort']) {
        this.sort = param['sort'];
        this.subscription = this.videoService.getListVideoSort(localStorage.getItem('keySearch'), this.sort).subscribe(data => {
          this.videos = data.items;
          this.videoService.videos = data.items;
          localStorage.setItem('listSearch', JSON.stringify(data.items));
        }, error => {
          this.videoService.handleError(error);
        });
      }
    });
  }
  playVideo(value) {
    this.router.navigate([`/video/${value}`]);
  }
  onSort(value) {
    this.keySearch = this.videoService.keySearch;
    let sort: string;
    let url = `/video/search/${localStorage.getItem('keySearch')}`;
    if (value.target.value === 'date') {
     sort = 'date';
    }
    if(value.target.value === 'title'){
      sort = 'title';
    }
    this.router.navigate([url], {queryParams: {sort: sort}});
  }
}
