import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from '../../model/message.class';
import { MessageService } from '../../service/message.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listmessage',
  templateUrl: './listmessage.component.html',
  styleUrls: ['./listmessage.component.css']
})
export class ListmessageComponent implements OnInit {

  public typeEmail: string;
  public messages: Message[];
  public changeColor: string = '';
  constructor(
    private activatedRouter: ActivatedRoute,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getTypeEmail();

  }
  getTypeEmail() {
    return this.activatedRouter.params.subscribe(x => {
      this.typeEmail = x.typeEmail;
      this.messages = this.messageService.getMessageByTypeEmail(x.typeEmail);
    });
  }
  messageDetail(value) {
    this.changeColor = value;
    let url = '/mymessage/' + this.typeEmail + '/' + value;
    this.router.navigate([url]);
  }
  color(value){
    this.changeColor = value;
  }
}
