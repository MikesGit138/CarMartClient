import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable}  from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  superEndpoint: string = `${environment.baseURL}/auth/login`

  constructor(private http: HttpClient) { }
  
  superLogin(data: any):Observable<any>{
    console.log('service to send post request works')
    return this.http.post(this.superEndpoint,data)
  }
}
