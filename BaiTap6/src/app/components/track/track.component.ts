import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TrackService } from '../../services/track.service';
import { Track } from '../../models/track.class';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  private id: string;
  private subscription: Subscription;
  private tracks: Track[] = [];
  constructor(
    private activatedRouter: ActivatedRoute,
    private trackService: TrackService
  ) { }

  ngOnInit() {
    this.getListTrack();
  }
  getListTrack() {
    return this.activatedRouter.params.subscribe(x => {
      this.id = x.id;
      this.subscription = this.trackService.getTrack(this.id).subscribe(data => {
        this.tracks = data.tracks;
        console.log(this.tracks);
      }, error => {
        this.trackService.handleError(error);
      });
    });
  }
}
