import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/services/jwt.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(public jwtService: JwtService) { }
  name: string = 'User';
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

}
