import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output()text = new EventEmitter<string>();
  enterText($event) {
    this.text.emit($event.target.value);
    $event.target.value = '';
  }
}
