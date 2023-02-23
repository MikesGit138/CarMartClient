import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/services/jwt.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(public jwtService: JwtService) { }
  
  private user_token = localStorage.getItem("TOKEN");
  private user:any = this.jwtService.DecodeToken(this.user_token)
  public name = this.user.username;
  public sidebarToggled = false;

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
  }

  toggleSidebar() {
    this.sidebarToggled = !this.sidebarToggled;
  }

}
