import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../core/auth.service';
import { TokenService } from '../core/token.service';
import { TokenStorage } from '../core/token.storage';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
