import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../model/todo.class';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input('sendTodo') todoSend : Todo[];
  @Output() idComplete = new EventEmitter<number>();
  @Output() idDelete = new EventEmitter<number>();
  constructor() { }
  ngOnInit() {
  }
  onHandleComplete($event) {
    this.idComplete.emit($event);
  }
  onHandleDelete($event) {
    this.idDelete.emit($event);
  }
}
