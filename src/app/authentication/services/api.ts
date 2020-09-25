import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Injectable()
export class UserApiService {

    constructor() { }

  register(user: User) {
    let users = [];
    if (localStorage.getItem('users')) {
      users = JSON.parse(localStorage.getItem('users'));
    }

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    return user;
  }

  login(email: string, password: string) {
    if (!localStorage.getItem('users')) {
      return null;
    }

    let users = JSON.parse(localStorage.getItem('users'));
    return users.find(user => {
      return user.email == email && user.password == password
    });
  }

}
