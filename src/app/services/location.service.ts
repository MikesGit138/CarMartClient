import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private locationURL = `${environment.baseURL}/location`
  private user_token = localStorage.getItem("TOKEN")
  
  constructor(private http: HttpClient) { }

  public getLocations():Observable<any[]>{

    const user_token = localStorage.getItem("TOKEN")
    const headers = new HttpHeaders({
      "Authorization" : `Bearer ${user_token}`
    })
    
    return this.http.get<any[]>(this.locationURL, {headers})
  }


}
