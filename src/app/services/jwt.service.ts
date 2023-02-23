import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { AuthService } from './auth.service';
//import jwt_decode from 'jwt-decode';
import jwtDecode, { JwtPayload } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn = this._isLoggedIn$.asObservable();

  constructor(private authService: AuthService) { 
    const token = localStorage.getItem('TOKEN')
    this._isLoggedIn$.next(!!token)
  }

  login(data: string){
    return this.authService.superLogin(data).pipe(
      tap(res =>{
        this._isLoggedIn$.next(true);
        localStorage.setItem('TOKEN', res.access_token);
      })
    )
  }

  DecodeToken(token: string) {
    try{
      return jwtDecode(token);
    } catch{
      console.log('error is from jwt-decode')
    }
    
    }


}
