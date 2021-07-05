import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { ProduitService } from './services/produit.service';
import { HeaderComponent } from './header/header.component';
import { ListproduitComponent } from './listproduit/listproduit.component';
import { AddproduitComponent } from './addproduit/addproduit.component';
import { UpdateproduitComponent } from './updateproduit/updateproduit.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    AccueilComponent,
    UserListComponent,
    UpdateUserComponent,
    UserProfileComponent,
    UpdatePasswordComponent,
    HeaderComponent,
    ListproduitComponent,
    AddproduitComponent,
    UpdateproduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ 
    AuthService,
    AuthGuardService,
    UserService,
    ProduitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
