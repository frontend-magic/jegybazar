import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {UserModel} from './user-model';

@Injectable()
export class UserService {
  isLoggedIn = false;
  private _user: UserModel;
  constructor( private _router: Router) { }

  login(email: string, password: string) {
    if ( email === 'angular' && password === 'angular') {
      this._user = new UserModel(UserModel.exampleUser);
      this.isLoggedIn = true;
      this._router.navigate(['/user']);
    }
  }
  register(param?: UserModel) {
    if (param) {
      this._user = new UserModel();
    } else {
      this._user = new UserModel(UserModel.exampleUser);
    }
    this.isLoggedIn = true;
    this._router.navigate(['/user']);
  }
  logout() {
    delete(this._user);
    this.isLoggedIn = false;
    this._router.navigate(['/home']);
  }

}
