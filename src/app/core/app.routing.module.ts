import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleGuardService } from './guards/role-guard.service';
import { UserComponent } from '../modules/user/user.component';
import { LoginComponent } from '../modules/login/login.component';
import { SignUpComponent } from '../modules/sign-up/sign-up.component';
import { ConfirmedComponent } from '../modules/sign-up/confirmed/confirmed.component';
import { PasswordResetComponent } from '../modules/password-reset/password-reset.component';
import { PasswordResetConfirmationComponent } from '../modules/password-reset/password-reset-confirmation/password-reset-confirmation.component';
import { PasswordResetFormComponent } from '../modules/password-reset/password-reset-form/password-reset-form.component';
import { AdminUsersListComponent } from '../modules/admin/admin-users-list/admin-users-list.component';
import { ActorListComponent } from '../modules/admin/actor-list/actor-list.component';
import { DirectorListComponent } from '../modules/admin/director-list/director-list.component';
import { CategoryListComponent } from '../modules/admin/category-list/category-list.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'confirmed', component: ConfirmedComponent },
  { path: 'forgot-password', component: PasswordResetComponent },
  { path: 'forgot-password-confirmation', component: PasswordResetConfirmationComponent },
  { path: 'reset-password', component: PasswordResetFormComponent },
  {
    path: 'admin/category-list', component: CategoryListComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: 'ADMIN'
    }
  },
  {
    path: 'admin/actor-list', component: ActorListComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: 'ADMIN'
    }
  },
  {
    path: 'admin/director-list', component: DirectorListComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: 'ADMIN'
    }
  },
  {
    path: 'admin/user-list', component: AdminUsersListComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: 'ADMIN'
    }
  },
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
