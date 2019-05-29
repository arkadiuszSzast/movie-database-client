import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './core/app.routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { CustomMaterialModule } from './core/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './core/app.interceptor';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ConfirmedComponent } from './sign-up/confirmed/confirmed.component';
import { PasswordResetConfirmationComponent } from './password-reset/password-reset-confirmation/password-reset-confirmation.component';
import { PasswordResetFormComponent } from './password-reset/password-reset-form/password-reset-form.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HasRoleDirective } from './directives/has-role-directive';

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
     HasRoleDirective
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
  bootstrap: [AppComponent]
})
export class AppModule { }
