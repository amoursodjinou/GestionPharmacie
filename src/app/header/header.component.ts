import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/User.model';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser = new User();

  constructor(public authService: AuthService, private router: Router, public userService: UserService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let isloggedin: string | null;
    let loggedUser: string | null;

    this.currentUser = this.userService.consulterUser(this.activatedRoute.snapshot.params.id);
    console.log(this.currentUser);

    isloggedin = localStorage.getItem('isloggedIn');
    loggedUser = localStorage.getItem('loggedUser');
    if (isloggedin != "true" || !loggedUser)
      this.router.navigate(['/auth/signin']);
    else
      this.authService.setLoggedUserFromLocalStorage(loggedUser);
  }

  onLogout() {
    this.authService.logout();
  }
}
