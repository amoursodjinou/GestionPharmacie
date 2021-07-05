import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  

  newUser = new User();


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm) {

  }

  addUser() {
   
    this.userService.ajouterUser(this.newUser);
    this.router.navigate(['/user-list']);

  }

}
