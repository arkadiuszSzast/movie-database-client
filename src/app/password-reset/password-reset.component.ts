import { Component, OnInit } from '@angular/core';
import { PasswordResetService } from './password-reset.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  constructor(private resetPasswordService: PasswordResetService, private router: Router) { }

  email: string;

  ngOnInit() {
  }

  resetPassword(): void {
    this.resetPasswordService.resetPasswordMailRequest(this.email).subscribe();
    this.router.navigate(['forgot-password-confirmation']);
  }

}
