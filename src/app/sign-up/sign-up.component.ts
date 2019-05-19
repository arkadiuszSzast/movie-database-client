import { Component } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { IUserForm } from '../user/user-form.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './mustMatch.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  registerForm: FormGroup;
  submitted: boolean = false;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required]],
    }, {
        validator: MustMatch('password', 'confirmPassword')
      });
  }

  get f() { return this.registerForm.controls; }

  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.controls[controlName].hasError(errorName);
  }

  signUp(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    const user: IUserForm = { username: this.registerForm.get("username").value, password: this.registerForm.get("password").value };
    this.authService.signUp(user).subscribe(res => {
      if (res.status == 201) {
        this.router.navigate(['login']);
      }
    });
  }

}
