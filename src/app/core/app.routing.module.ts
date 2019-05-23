
import { UserComponent } from '../user/user.component';

import { LoginComponent } from '../login/login.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { PasswordResetComponent } from '../password-reset/password-reset.component';
import { ConfirmedComponent } from '../sign-up/confirmed/confirmed.component';
import { PasswordResetConfirmationComponent } from '../password-reset/password-reset-confirmation/password-reset-confirmation.component';
import { PasswordResetFormComponent } from '../password-reset/password-reset-form/password-reset-form.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'confirmed', component: ConfirmedComponent },
  { path: 'forgot-password', component: PasswordResetComponent },
  { path: 'forgot-password-confirmation', component: PasswordResetConfirmationComponent },
  { path: 'reset-password', component: PasswordResetFormComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
