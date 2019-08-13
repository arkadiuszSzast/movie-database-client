import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { TokenStorage } from 'src/app/core/token.storage';
import { Subject } from 'rxjs';
import { takeUntil, first } from 'rxjs/operators';
import { AppProperties } from 'src/app/core/app.properties';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  
  private _unsubscribe: Subject<void> = new Subject<void>();

  constructor(private authService: AuthService, private tokenStorage: TokenStorage) { 
    authService.emmitLoggedUsername.pipe(takeUntil(this._unsubscribe)).subscribe(username => {
      this.username = username
      if(this.username) this.isUserLogged = true;
    });
  }

  username: String = this.authService.getLoggedUsername();
  isUserLogged: boolean = this.authService.isUserLogged();

  ngOnInit() {
  }

  logout() {
    this.authService.logout().pipe(first()).subscribe(() => this.tokenStorage.signOut());
    this.isUserLogged = false;
  }

  getAvatarUrl(): String {
    return AppProperties.AVATAR_ENDPOINT + this.authService.getUserAvatar();
  }

  public ngOnDestroy(): void {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }
}
