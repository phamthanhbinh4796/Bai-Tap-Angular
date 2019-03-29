import { Injectable, OnInit } from '@angular/core';
import { Message } from '../model/message.class';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { DataService } from '../service/data.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public messages: Message[] = [];
  public message: Message;
  public messageByTypeEmail: Message[] = [];

  constructor(
    public http: HttpClient,
    private dataService: DataService
  ) {
    this.getAllMessages();
    this.messageByTypeEmail = [];
  }
  getAllMessages() {
    // this.http
    //   .get<Message[]>('assets/writejson/messages.json')
    //   .pipe(tap(x => x))
    //   .subscribe(mes => {
    //     this.messages = mes;
    //   });
    this.messages = this.dataService.getAllData();
  }
  getMessageByTypeEmail(typeEmail: string) {
    this.messageByTypeEmail = [];
    this.messages.forEach(element => {
      if (
        element.folder === typeEmail &&
        element.to === sessionStorage.getItem('userSession')
      ) {
        this.messageByTypeEmail.push(element);
      }
    });
    return this.messageByTypeEmail;
  }
  getMessage(id: string){
    this.messages.forEach(element => {
      if (
        element._id === id
      ) {
        this.message = element;
      }
    });
    return this.message;
  }
}
