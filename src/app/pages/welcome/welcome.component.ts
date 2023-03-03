import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/services/jwt.service';
import { Model } from 'src/app/models/model';

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

  constructor(public jwtService: JwtService) { }
  

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

  ngOnInit(): void {
    console.log(this.User)
  }

  toggleSidebar() {
    this.sidebarToggled = !this.sidebarToggled;
  }

}
