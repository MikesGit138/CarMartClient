import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  public location = "Location";
  @Input() storeList?:String[];
  @Input() locationName?:String;

  constructor() { }

  stores = [
    "stores",
    "stores",
    "stores",
    "stores",
    "stores",
    "stores",
    "stores",
    "stores",
  ]
  ngOnInit(): void {
  }

}
