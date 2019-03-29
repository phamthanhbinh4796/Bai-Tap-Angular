import { Injectable } from '@angular/core';
import { User } from '../model/user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userName: string[];
  constructor() {
  }
  public users: User[] = [
    {
      userName: 'myself@angular.dev',
      passWord: 'abc123'
    },
    {
      userName: 'devgal@angular.dev',
      passWord: 'abc123'
    },
    {
      userName: 'devguy@angular.dev',
      passWord: 'abc123'
    }
  ];
  public checkLogin(userName: string, passWord: string): boolean{
    let check = false;
    this.users.forEach(element => {
      if (element.userName === userName && element.passWord === passWord) {
        check = true;
      }
    });
    return check;
  }
  public getUser() {
    this.userName = [];
    this.users.forEach(element => {
      this.userName.push(element.userName);
    });
    return this.userName;
  }
}
