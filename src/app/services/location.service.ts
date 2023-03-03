import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, Observable, map, tap, lastValueFrom } from 'rxjs';
//import 'rxjs/add/operator/map'
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private locationURL = `${environment.baseURL}/location`
  user_token = localStorage.getItem("TOKEN")
  private locations?:any
  
  constructor(private http: HttpClient, private jwt: JwtService) { }

  public async getLocations(){
    const user_token = localStorage.getItem("TOKEN")
    const headers = new HttpHeaders({
      "Authorization" : `Bearer ${user_token}`
    })
    
     return this.http.get(this.locationURL, {headers}).subscribe(
      res => this.locations = res,
      err => console.log(err)
     )
    
  }

  public async getLocationArray(){
    //this.getLocations()
    return this.locations
  }

}
