import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/User.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  currentUser = new User();

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    //console.log(this.activatedRoute.snapshot.params.id);
    this.currentUser = this.userService.consulterUser(this.activatedRoute.snapshot.params.id);
    console.log(this.currentUser);
  }

  updateUser(){
    //console.log(this.currentUser);
    this.userService.updateUser(this.currentUser);
    this.router.navigate(['/accueil']);

  }

}
