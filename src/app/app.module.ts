import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './core/app.routing.module';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from './core/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './core/app.interceptor';
import { NgxCaptchaModule } from 'ngx-captcha';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HasRoleDirective } from './directives/has-role-directive';
import { UserComponent } from './modules/user/user.component';
import { LoginComponent } from './modules/login/login.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { ConfirmedComponent } from './modules/sign-up/confirmed/confirmed.component';
import { PasswordResetComponent } from './modules/password-reset/password-reset.component';
import { PasswordResetConfirmationComponent } from './modules/password-reset/password-reset-confirmation/password-reset-confirmation.component';
import { PasswordResetFormComponent } from './modules/password-reset/password-reset-form/password-reset-form.component';
import { AdminSidenavComponent } from './modules/admin/admin-sidenav/admin-sidenav.component';
import { AdminUsersListComponent } from './modules/admin/admin-users-list/admin-users-list.component';
import { RoleEditModalComponent } from './modules/admin/admin-users-list/role-edit-modal/role-edit-modal.component';
import { UserDeleteModalComponent } from './modules/admin/admin-users-list/user-delete-modal/user-delete-modal.component';
import { ActorListComponent } from './modules/admin/actor-list/actor-list.component';
import { ActorAddModalComponent } from './modules/admin/actor-list/actor-add-modal/actor-add-modal.component';
import { DirectorListComponent } from './modules/admin/director-list/director-list.component';
import { DirectorAddModalComponent } from './modules/admin/director-list/director-add-modal/director-add-modal.component';
import { DirectorDeleteModalComponent } from './modules/admin/director-list/director-delete-modal/director-delete-modal.component';
import { ActorDeleteModalComponent } from './modules/admin/actor-list/actor-delete-modal/actor-delete-modal.component';
import { CategoryListComponent } from './modules/admin/category-list/category-list.component';
import { CategoryAddModalComponent } from './modules/admin/category-list/category-add-modal/category-add-modal.component';
import { CategoryDeleteModalComponent } from './modules/admin/category-list/category-delete-modal/category-delete-modal.component';
import { MovieListComponent } from './modules/admin/movie-list/movie-list.component';
import { MovieAddModalComponent } from './modules/admin/movie-list/movie-add-modal/movie-add-modal/movie-add-modal.component';
import { MovieDeleteModalComponent } from './modules/admin/movie-list/movie-delete-modal/movie-delete-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    SignUpComponent,
    ConfirmedComponent,
    PasswordResetComponent,
    PasswordResetConfirmationComponent,
    PasswordResetFormComponent,
    NavbarComponent,
    HasRoleDirective,
    AdminSidenavComponent,
    AdminUsersListComponent,
    RoleEditModalComponent,
    UserDeleteModalComponent,
    ActorListComponent,
    ActorAddModalComponent,
    DirectorListComponent,
    DirectorAddModalComponent,
    DirectorDeleteModalComponent,
    ActorDeleteModalComponent,
    CategoryListComponent,
    CategoryAddModalComponent,
    CategoryDeleteModalComponent,
    MovieListComponent,
    MovieAddModalComponent,
    MovieDeleteModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CustomMaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    RoleEditModalComponent, 
    UserDeleteModalComponent,
    ActorAddModalComponent,
    DirectorAddModalComponent, 
    DirectorDeleteModalComponent, 
    ActorDeleteModalComponent,
    CategoryAddModalComponent,
    CategoryDeleteModalComponent,
    MovieAddModalComponent,
    MovieDeleteModalComponent
  ],

})
export class AppModule { }
