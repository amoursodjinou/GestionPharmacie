import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproduitComponent } from './addproduit/addproduit.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ListproduitComponent } from './listproduit/listproduit.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateproduitComponent } from './updateproduit/updateproduit.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'auth/signup', canActivate:[AuthGuardService], component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'user-list', canActivate:[AuthGuardService], component: UserListComponent },
  { path: 'updateUser/:id', canActivate:[AuthGuardService], component: UpdateUserComponent },
  { path: 'userprofile/:id', component: UserProfileComponent },
  { path: 'updatepassword', component: UpdatePasswordComponent },
  { path: 'listproduit', component: ListproduitComponent},
  { path: 'addproduit', canActivate:[AuthGuardService], component: AddproduitComponent},
  { path: 'updateProduit/:id', canActivate:[AuthGuardService], component: UpdateproduitComponent},
  { path: '', redirectTo: 'listproduit', pathMatch: 'full'},
  { path: '**', redirectTo: 'listproduit' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
