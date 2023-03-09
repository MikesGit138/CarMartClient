import { Component, OnInit, Input } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { firstValueFrom } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  public location:any = "Location";

  constructor(private locService: LocationService,
    private actRoute: ActivatedRoute,
    private route: Router) { }
  // locationInfo = this.locService.getLocationInfo()
  locationInfo:any
  public locationId:any;
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
  //console.log('from the location page', this.locationInfo)
  // let id = this.actRoute.snapshot.paramMap.get('id')
  // parseInt(id!)
  // this.locationId = id;
  this.actRoute.paramMap.subscribe(
    (params: ParamMap) => {
      let id = params.get('id')
      parseInt(id!)
      this.locationId = id
      this.locationInfo = this.locService.findLocation(this.locationId)
      this.location = this.locationInfo.name
      console.log(this.locationInfo)
    },
  
  )

  }

}
