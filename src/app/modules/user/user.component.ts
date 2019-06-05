import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/core/auth.service';
import { TokenService } from 'src/app/core/token.service';
import { TokenStorage } from 'src/app/core/token.storage';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private http: HttpClient, private authService: AuthService, private tokenService: TokenService, private storage: TokenStorage) { }

  ngOnInit() {
  }

}
