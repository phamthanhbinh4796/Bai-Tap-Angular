import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { MymessageComponent } from './components/mymessage/mymessage.component';
import { LogoutDirective } from './directives/logout.directive';
import { InboxComponent } from './components/inbox/inbox.component';
import { ListmessageComponent } from './components/listmessage/listmessage.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageComponent } from './components/message/message.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReferencesComponent } from './components/references/references.component';
import { SortmessagePipe } from './pipes/sortmessage.pipe';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'references',
    component: ReferencesComponent
  },
  {
    path: 'mymessage',
    component: MymessageComponent,
    children:
    [
      {
        path: '',
        redirectTo: '/mymessage/inbox',
        pathMatch: 'full'
      },
      {
        path: ':typeEmail',
        component: ListmessageComponent
      },
      {
        path: ':id',
        component: MessageComponent,
        outlet: 'messageDetail'
      }
    ]
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    MymessageComponent,
    LogoutDirective,
    InboxComponent,
    ListmessageComponent,
    MessageComponent,
    ContactComponent,
    ReferencesComponent,
    SortmessagePipe
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
