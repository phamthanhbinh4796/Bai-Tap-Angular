import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Message } from '../../model/message.class';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  private message: Message;
  private id: string;
  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private messageService: MessageService
  ) {
    this.getEmail();
  }

  ngOnInit() {
  }
  getEmail() {
    return this.activatedRouter.params.subscribe(x => {
      this.id = x.id;
      this.message = this.messageService.getMessage(x.id);
    });
  }
}
