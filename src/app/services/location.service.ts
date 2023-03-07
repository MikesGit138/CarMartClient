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
  public locationInfo?:Object;
  
  constructor(private http: HttpClient) { }

  public getLocations():Observable<any[]>{
    const headers = new HttpHeaders({
      "Authorization" : `Bearer ${this.user_token}`
    })
    return this.http.get<any[]>(this.locationURL, {headers})
  }

  public findLocation(id: any){
    console.log(id)
    const headers = new HttpHeaders({
      "Authorization" : `Bearer ${this.user_token}`
    })
    return this.http.get(this.locationURL + "/" + id, {headers})
    .subscribe(res => {this.locationInfo = res, console.log(this.locationInfo)})
  }

}
