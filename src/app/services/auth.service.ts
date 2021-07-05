import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: User[] = [
    { userId: 1, userName: "QUENUM Jean-Marie", email: "jeanmarie@gmail.com", password: "1234", status: ["Admin"] },
    { userId: 2, userName: "DUPONT Pierre", email: "dupontpierre@gmail.com", password: "123", status: ["User"] },
    { userId: 3, userName: "DESCHAMP Jeanne", email: "jeannedesch@gmail.com", password: "124", status: ["User"] },
    { userId: 4, userName: "DOSSOU Stella", email: "dossoustella@gmail.com", password: "125", status: ["User"] }

  ];

  public loggedUser!: string;
  public isloggedIn: Boolean = false;
  public status!: string[];

  constructor(private router: Router) { }

  SignIn(user: User): Boolean {
    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
      if (user.email === curUser.email && user.password == curUser.password) {
        validUser = true;
        this.loggedUser = curUser.userName;
        this.isloggedIn = true;
        this.status = curUser.status;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
    });
    return validUser;
  }

  isAdmin(): Boolean {
    if (!this.status)
      return false;
    return (this.status.indexOf('Admin') > -1);
    ;
  }

  logout() {
    this.isloggedIn = false;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/auth/signin']);
  }

  setLoggedUserFromLocalStorage(login: string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  }
  getUserRoles(userName: string) {
    this.users.forEach((curUser) => {
      if (curUser.userName == userName) {
        this.status = curUser.status;
      }
    });
  }
}
