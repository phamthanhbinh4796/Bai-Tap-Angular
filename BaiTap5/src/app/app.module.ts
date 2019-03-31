import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { TemplatedrivenformComponent } from './components/templatedrivenform/templatedrivenform.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveformComponent,
    TemplatedrivenformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
