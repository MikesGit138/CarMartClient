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




  public getLocations():Observable<any[]>{

    const user_token = localStorage.getItem("TOKEN")
    const headers = new HttpHeaders({
      "Authorization" : `Bearer ${user_token}`
    })
    
    return this.http.get<any[]>(this.locationURL, {headers})
  }

  public async getLocationArray(){
    this.getLocations()
    return this.locations
  }

}
