import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/User.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  // userForm!: FormGroup;
  currentUser = new User();

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    //console.log(this.activatedRoute.snapshot.params.id);
    this.currentUser = this.userService.consulterUser(this.activatedRoute.snapshot.params.id);
    console.log(this.currentUser);
  }

  updateUser(){
    //console.log(this.currentUser);
    this.userService.updateUser(this.currentUser);
    this.router.navigate(['/user-list']);

  }



}
