import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SuperuserService {

  constructor(http: HttpClient) {}
  endpoint: string = `${environment.apiURL}/auth/login`

}
