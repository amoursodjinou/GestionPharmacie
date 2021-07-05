import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];

  /*private users: User[] = [
    {
      userId: 1,
      userName: 'QUENUM Jean-Marie',
      email: 'jeanmarie@gmail.com',
      password: '123',
      status:['Admin']
    },
    {
      userId: 2,
      userName: 'Jean-Marie',
      email: 'marie@gmail.com',
      password: '1234',
      status:['User']
    }
  ];
  userSubject = new Subject<User[]>();*/

  /*public loggedUser!: string;
  public isloggedIn: Boolean = false;
  public status!: string[];*/

  constructor() {
    this.users = [
      { userId: 1, userName: "QUENUM Jean-Marie", email: "jeanmarie@gmail.com", password: "1234", status: ["Admin"] },
      { userId: 2, userName: "DUPONT Pierre", email: "dupontpierre@gmail.com", password: "123", status: ["User"] },
      { userId: 3, userName: "DESCHAMP Jeanne", email: "jeannedesch@gmail.com", password: "124", status: ["User"] },
      { userId: 4, userName: "DOSSOU Stella", email: "dossoustella@gmail.com", password: "125", status: ["User"] }

    ];
  }

  listeUser(): User[] {
    return this.users;
  }

  ajouterUser(use: User) {
    this.users.push(use);
  }

  supprimerUser(use: User) {
    const index = this.users.indexOf(use, 0);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }

  consulterUser(id: number): User {
    return this.users.find(use => use.userId == id)!;

  }

  updateUser(use: User) {
    //console.log(use);
    this.supprimerUser(use);
    this.ajouterUser(use);
    this.trierUsers();
  }

  trierUsers() {
    this.users = this.users.sort((n1, n2) => {
      if (n1.userId > n2.userId) {
        return 1;
      }
      if (n1.userId < n2.userId) {
        return -1;
      }
      return 0;
    });
  }

  /*emitUsers(){
    this.userSubject.next(this.users.slice());
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

  SignIn(user: User): Boolean {
    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
      if (user.userName === curUser.userName && user.password == curUser.password) {
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

  addUser(user: User){
    this.users.push(user);
    this.emitUsers;
  }

  isAdmin(): Boolean {
    if (!this.status)
      return false;
    return (this.status.indexOf('ADMIN') > -1);
    ;
  }

  logout() {
    this.isloggedIn= false;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/signin']);
  }*/
}
