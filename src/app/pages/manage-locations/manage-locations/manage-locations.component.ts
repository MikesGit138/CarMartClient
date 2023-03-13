import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-locations',
  templateUrl: './manage-locations.component.html',
  styleUrls: ['./manage-locations.component.scss']
})
export class ManageLocationsComponent implements OnInit {
  public locations = [
    "Location",
    "Location",
    "Location",
    "Location",
    "Location",
    "Location",
    "Location",
    "Location",
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
