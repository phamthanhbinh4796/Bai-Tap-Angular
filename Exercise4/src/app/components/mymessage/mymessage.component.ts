import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mymessage',
  templateUrl: './mymessage.component.html',
  styleUrls: ['./mymessage.component.css']
})
export class MymessageComponent implements OnInit {

  public icon: string = 'inbox';
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    this.checkLogin();
  }
  checkLogin() {
    if (sessionStorage.getItem('userSession') === null) {
      this.router.navigate(['/login']);
    }
  }
  changeIcon(value){
    this.icon = value;
  }
}
