import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhonePipePipe } from './pipes/phone-pipe.pipe';
import { SortObjectPipe } from './pipes/sort-object.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PhonePipePipe,
    SortObjectPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
