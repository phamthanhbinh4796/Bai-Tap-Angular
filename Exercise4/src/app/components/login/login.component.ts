import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public check: boolean = false;
  public invalid = true;
  private user: string[];
  constructor(
    public userService: UserService,
    public router: Router
  ) { }

  ngOnInit() {
    this.getUser();
  }
  login(userName: string, passWord: string) {
    this.check = this.userService.checkLogin(userName, passWord);
    if (this.check === true) {
      sessionStorage.setItem('userSession', userName);
      this.router.navigate(['mymessage']);
    }
    if (this.check === false) {
      this.invalid = false;
    }
  }
  getUser(){
    this.user = this.userService.getUser();
  }
}
