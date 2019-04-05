import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideoService } from '../../services/video.service';
import { Video } from '../../models/video.class';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Comment } from '../../models/comment.class';
@Component({
  selector: 'app-videodetail',
  templateUrl: './videodetail.component.html',
  styleUrls: ['./videodetail.component.css']
})
export class VideodetailComponent implements OnInit {

  public videos: Video[] = [];
  public comments: Comment[] = [];
  public url: SafeResourceUrl;
  public description: string;
  public date: string;
  public channelTitle: string;
  public subscription: Subscription;
  public title: string;
  public viewCount: number;
  public like: number;
  public disLike: number;
  public channelId: string;
  public subscribe: number;
  public imageChannel: string;
  public commentCount: number;
  public baseUrl = 'https://www.youtube.com/embed/';
  constructor(
    private activatedRouter: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private videoService: VideoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getId();
    this.getListVideo();
  }
  getId() {
    return this.activatedRouter.params.subscribe(x => {
      localStorage.setItem('videoId', x.id);
      this.subscription = this.videoService.getVideoById(localStorage.getItem('videoId')).subscribe(data => {
        this.description = data.items[0].snippet.description;
        this.date = data.items[0].snippet.publishedAt;
        this.channelTitle = data.items[0].snippet.channelTitle;
        this.title = data.items[0].snippet.localized.title;
        this.viewCount = data.items[0].statistics.viewCount;
        this.like = data.items[0].statistics.likeCount;
        this.disLike = data.items[0].statistics.dislikeCount;
        this.channelId = data.items[0].snippet.channelId;
        this.commentCount = data.items[0].statistics.commentCount;
        localStorage.setItem('channelId', this.channelId);
        this.getChannel();
        this.getComment();
      }, error => {
        this.videoService.handleError(error);
      });
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + localStorage.getItem('videoId') + '?autoplay=1');
    });
  }
  getChannel() {
    this.subscription = this.videoService.getChannel(localStorage.getItem('channelId')).subscribe(data => {
      this.imageChannel = data.items[0].snippet.thumbnails.high.url;
      this.subscribe = data.items[0].statistics.subscriberCount;
      }, error => {
        this.videoService.handleError(error);
    });
  }
  getComment() {
    this.subscription = this.videoService.getComment(localStorage.getItem('videoId')).subscribe(data => {
      this.comments = data.items;
      console.log(this.comments);
      }, error => {
        this.videoService.handleError(error);
    });
  }
  getListVideo() {
    this.videos = JSON.parse(localStorage.getItem('listSearch')) as Video[];
  }
  playVideo(value) {
    this.router.navigate([`/video/${value}`]);
  }
}
