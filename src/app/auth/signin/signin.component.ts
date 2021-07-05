import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user = new User();
  erreur=0;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLoggedin() {
    console.log(this.user);
    console.log(this.user);
    let isValidUser: Boolean = this.authService.SignIn(this.user);
    if (isValidUser)
      this.router.navigate(['/']);
    else
      this.erreur = 1;
  }

}
