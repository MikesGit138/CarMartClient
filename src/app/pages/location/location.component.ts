import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  public location:any;
  public stores:any;

  constructor(private locService: LocationService,
    private actRoute: ActivatedRoute,
    private route: Router) { }
    locationInfo:any
  public locationId:any;
  
  ngOnInit(): void {
  
  this.actRoute.paramMap.subscribe(
    (params: ParamMap) => {
      let id = params.get('id')
      parseInt(id!)
      this.locationId = id
    },
  )
  this.locService.findLocation(this.locationId)
  .subscribe({next : res => this.locationInfo = res,
              complete: () => {
                this.location = this.locationInfo.name,
                this.stores = this.locationInfo.stores
              }
            })

  }

}
