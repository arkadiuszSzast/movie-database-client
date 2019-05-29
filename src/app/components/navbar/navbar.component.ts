import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { TokenStorage } from 'src/app/core/token.storage';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private tokenStorage: TokenStorage) { 
    authService.emmitLoggedUsername.subscribe(username => {
      this.username = username
      if(this.username) this.isUserLogged = true;
    });
  }

  username: String = this.authService.getLoggedUsername();
  isUserLogged: boolean = this.authService.isUserLogged();

  ngOnInit() {
  }

  logout() {
    this.authService.logout().subscribe(() => this.tokenStorage.signOut());
    this.isUserLogged = false;
  }
}
