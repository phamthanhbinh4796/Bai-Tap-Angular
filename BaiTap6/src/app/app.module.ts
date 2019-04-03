import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArtistComponent } from './components/artist/artist.component';
import { SearchComponent } from './components/search/search.component';
import { TrackComponent } from './components/track/track.component';

import { Routes, RouterModule } from '@angular/router';
import { ArtistdetailComponent } from './components/artistdetail/artistdetail.component';

import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/artist',
    pathMatch: 'full'
  },
  {
    path: 'artist',
    component: ArtistComponent,
    children: [
      {
        path: ':name',
        component: ArtistdetailComponent,
        children: [
          {
            path: ':id',
            component: TrackComponent
          }
        ]
      }
    ]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    SearchComponent,
    TrackComponent,
    ArtistdetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
