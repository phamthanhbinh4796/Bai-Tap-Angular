import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public userSession: string;
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    this.userSession = sessionStorage.getItem('userSession');
  }
  logout() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
