import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideoService } from '../../services/video.service';
import { Video } from '../../models/video.class';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-videodetail',
  templateUrl: './videodetail.component.html',
  styleUrls: ['./videodetail.component.css']
})
export class VideodetailComponent implements OnInit {

  public videos: Video[] = [];
  public id: string;
  public url: SafeResourceUrl;
  public description: string;
  public date: string;
  public channelTitle: string;
  public subscription: Subscription;
  public title: string;
  public baseUrl = 'https://www.youtube.com/embed/';
  constructor(
    private activatedRouter: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private videoService: VideoService,
    private router: Router
  ) { 
    
  }

  ngOnInit() {
    this.getId();
    this.getListVideo();
  }
  getId() {
    return this.activatedRouter.params.subscribe(x => {
      this.description = this.videoService.description;
      this.date = this.videoService.date;
      this.id = x.id;
      this.subscription = this.videoService.getVideoById(this.id).subscribe(data => {
        this.description = data.items[0].snippet.description;
        this.date = data.items[0].snippet.publishedAt;
        this.channelTitle = data.items[0].snippet.channelTitle;
        this.title = data.items[0].snippet.localized.title;
      }, error => {
        this.videoService.handleError(error);
      });
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.id + '?autoplay=1');
    });
  }
  getListVideo() {
    this.videos = JSON.parse(localStorage.getItem('listSearch')) as Video[];
  }
  playVideo(value){
    this.router.navigate([`/video/${value}`]);
  }
}
