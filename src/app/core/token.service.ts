import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IToken } from './token.model';

@Injectable({ providedIn: 'root' })
export class TokenService {

  constructor() { }

  decodeToken(token: string): IToken {
    const jwtHelper = new JwtHelperService(); 
    return jwtHelper.decodeToken(token);
  }

}