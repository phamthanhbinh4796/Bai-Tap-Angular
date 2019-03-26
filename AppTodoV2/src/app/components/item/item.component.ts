import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../model/todo.class';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input('todoItem') item : Todo;
  @Output() idComplete = new EventEmitter<number>();
  @Output() idDelete = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  changeComplete(index: number) {
    this.idComplete.emit(index);
  }
  deleteTodo(index: number){
    this.idDelete.emit(index);
  }
}
