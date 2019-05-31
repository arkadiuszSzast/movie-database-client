import { Component, OnInit, OnDestroy } from '@angular/core';
import { PasswordResetService } from './password-reset.service';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  constructor(private resetPasswordService: PasswordResetService, private router: Router) { }

  private _unsubscribe: Subject<void> = new Subject<void>();

  email: string;

  ngOnInit() {
  }

  resetPassword(): void {
    this.resetPasswordService.resetPasswordMailRequest(this.email).pipe(takeUntil(this._unsubscribe)).subscribe();
    this.router.navigate(['forgot-password-confirmation']);
  }

  public ngOnDestroy(): void {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

}
