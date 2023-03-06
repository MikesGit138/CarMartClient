import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/services/jwt.service';
import { User } from 'src/app/models/model';
import { LocationService } from 'src/app/services/location.service';
import { Router, ActivatedRoute } from '@angular/router';
import { findIndex, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  private user_token = localStorage.getItem("TOKEN");
  private user_decoded:any = this.jwtService.DecodeToken(this.user_token)
  private User = new User(this.user_decoded.sub, this.user_decoded.username);
  public username = this.User.getUserName();
  public sidebarToggled = false;
  public locations?: any[]; 

  constructor(private jwtService: JwtService, 
    private locService: LocationService,
    private route: Router,
     private actroute: ActivatedRoute) { }

  acceptData(){
    return this.locService.getLocations()
            .subscribe(data => 
              {this.locations = data, console.log(this.locations)})
  }

  goToLocation(loc: any){
      //const id = Number(this.actroute.snapshot.paramMap.get('id'));
      //const id = this.locations?.findIndex(loc)
      //return this.route.navigate(['/location'])
      this.locService.findLocation(loc.id)
      return this.route.navigate(['/location/' + loc.id])
  }

  ngOnInit(): void {
    console.log(this.User);
    console.log(this.user_token);
    this.acceptData()
  }

  toggleSidebar() {
    this.sidebarToggled = !this.sidebarToggled;
  }


}
