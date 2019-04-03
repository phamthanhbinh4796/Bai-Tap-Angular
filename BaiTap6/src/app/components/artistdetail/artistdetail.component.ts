import { Component, OnInit } from '@angular/core';
import { Artist } from '../../models/artist.class';
import { ArtistService } from '../../services/artist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-artistdetail',
  templateUrl: './artistdetail.component.html',
  styleUrls: ['./artistdetail.component.css']
})
export class ArtistdetailComponent implements OnInit {

  private name: string;
  private artists: Artist[] = [];
  private subscription: Subscription;
  constructor(
    private artistService: ArtistService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getListArtist();
  }
  getListArtist() {
    return this.activatedRouter.params.subscribe(x => {
      this.name = x.name;
      this.subscription = this.artistService.getArtist(this.name).subscribe(data => {
        this.artists = data.artists.items;
      }, error => {
        this.artistService.handleError(error);
      });
    });
  }
  showListTrack(value){
    let url = '/artist/' + this.name + '/' + value;
    this.router.navigate([url]);
  }
}
