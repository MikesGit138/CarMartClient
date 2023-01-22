import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { AuthService } from './auth.service';

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

  login(data: any){
    return this.authService.superLogin(data).pipe(
      tap(res =>{
        this._isLoggedIn$.next(true);
        localStorage.setItem('TOKEN', res.access_token);
      })
    )

  }
}
