import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/services/jwt.service';
import { Model } from 'src/app/models/model';
import { LocationService } from 'src/app/services/location.service';
import { lastValueFrom, Observable, firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  private user_token = localStorage.getItem("TOKEN");
  private user_decoded:any = this.jwtService.DecodeToken(this.user_token)
  public User = new Model(this.user_decoded.sub, this.user_decoded.username);
  public username = this.User.getUserName();
  public sidebarToggled = false;
  locations?: any; 

  constructor(public jwtService: JwtService, public locService: LocationService) { }
  

  buttons = [
    "Location",
    "Location",
    "Location",
    "Location",
    "Location",
    "Location",
    "Location",
    "Location",
  ]

  acceptData(){
   //return lastValueFrom(this.locService.getLocations())
    //console.log(this.locations)
    //return this.locService.getLocations()
    return this.locService.getLocationArray()
    
  }

  ngOnInit(): void {
    console.log(this.User);
    console.log(this.user_token);
    // this.locService.getLocations()
    //  .subscribe(data => {this.locations = data})
    //console.log("loc is ",this.locService.getLocationArray())
    console.log(this.acceptData())
    //console.log(this.locations)
  }

  toggleSidebar() {
    this.sidebarToggled = !this.sidebarToggled;
  }

}
