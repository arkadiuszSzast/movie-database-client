import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/sign-up/mustMatch.validator';
import { PasswordResetService } from '../password-reset.service';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-password-reset-form',
  templateUrl: './password-reset-form.component.html',
  styleUrls: ['./password-reset-form.component.css']
})
export class PasswordResetFormComponent implements OnInit {
  
  resetPasswordGroup: FormGroup;
  token: string;

  constructor(private formBuilder: FormBuilder, private passwordResetService: PasswordResetService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      this.token = queryParams.get("token")
    })
    this.resetPasswordGroup = this.formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required]],
    }, {
        validator: MustMatch('password', 'confirmPassword')
      });
  }

  get f() { return this.resetPasswordGroup.controls; }

  public hasError = (controlName: string, errorName: string) => {
    return this.resetPasswordGroup.controls[controlName].hasError(errorName);
  }

  public resetPassword(): void {
    if(this.token) {
      this.passwordResetService.resetPassword(this.resetPasswordGroup.get("password").value, this.token).subscribe();
    }
  }

}
