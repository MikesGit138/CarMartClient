import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/services/jwt.service';
import { User } from 'src/app/models/model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(public jwtService: JwtService) { }
  user_token = localStorage.getItem("TOKEN");
  user:any = this.jwtService.DecodeToken(this.user_token)
  name = this.user.username;
  sidebarToggled = false;

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
