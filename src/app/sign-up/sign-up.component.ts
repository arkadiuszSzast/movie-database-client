import { Component, ViewChild, OnDestroy } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { IUserForm } from '../user/user-form.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './mustMatch.validator';
import { ReCaptcha2Component } from 'ngx-captcha';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/finally';
import { Subscription, Subject } from 'rxjs';
import { takeUntil, first } from 'rxjs/operators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  registerForm: FormGroup;
  submitted: boolean = false;
  error: string;
  @ViewChild('captchaElem') captchaElem: ReCaptcha2Component;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required]],
      recaptcha: ['', Validators.required]
    }, {
        validator: MustMatch('password', 'confirmPassword')
      });
  }

  get f() { return this.registerForm.controls; }

  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.controls[controlName].hasError(errorName);
  }

  reloadCaptcha(): void {
    this.captchaElem.reloadCaptcha();
}

  signUp(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    const recaptchaResponse: string = this.registerForm.get("recaptcha").value;
    const user: IUserForm = { username: this.registerForm.get("username").value,
    email: this.registerForm.get("email").value,
    password: this.registerForm.get("password").value };
    this.authService.signUp(user, recaptchaResponse)
    .finally(() => {
      this.registerForm.get("password").reset();
      this.registerForm.get("confirmPassword").reset();
      this.registerForm.get("recaptcha").reset();
      this.resetCaptcha();
    })
    .pipe(first())
    .subscribe(  
    (data: HttpResponse<Response>) => {
      if(data.status == 201) {
        this.router.navigate(['login']);
      }
    },
    (err: HttpErrorResponse) => {
      this.error = err.error.message;
    });
  }

  resetCaptcha(): void {
    this.captchaElem.reloadCaptcha();
  }
}
