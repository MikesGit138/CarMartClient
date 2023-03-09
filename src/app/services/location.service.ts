import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, lastValueFrom, map, Observable, firstValueFrom } from 'rxjs';

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
  
     this.http.get(this.locationURL + "/" + id, {headers})
    .subscribe({
      next: res => this.locationInfo = res,
      error: err => console.error(err),
      //complete: () =>  {return this.locationInfo}
      complete: () =>  console.log('frm findLocation() in location.service.ts',this.locationInfo)
    });
      return this.locationInfo

  }

  public getLocationInfo(){
    return this.locationInfo
  }

}
