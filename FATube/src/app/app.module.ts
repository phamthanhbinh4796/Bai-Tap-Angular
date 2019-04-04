import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { VideoresultComponent } from './components/videoresult/videoresult.component';
import { VideolistComponent } from './components/videolist/videolist.component';
import { VideodetailComponent } from './components/videodetail/videodetail.component';

import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'video',
    pathMatch: 'full'
  },
  {
    path: 'video',
    component: VideoresultComponent,
    children: [
      {
        path: 'search/:name',
        component: VideolistComponent
      },
      {
        path: ':id',
        component: VideodetailComponent
      }
    ]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    VideoresultComponent,
    VideolistComponent,
    VideodetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
