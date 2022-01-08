import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { RootObject } from '../interface/vehicle';
import { SharedService } from '../services/shared.service';
@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {

  loading:boolean = false;
  vehicle:any
  parking:any
  poi:any
  title:String = 'My first AGM project';

  constructor(private shared:SharedService) { }
  
  ngOnInit(): void {
    this.loading = false;
    this.loadData()
  }

  loadData(){
    let vehicleData =  this.shared.getVehicleList()
    let pargkinData =  this.shared.getParkingList()
    let poiData =  this.shared.getPoiList()
    forkJoin([vehicleData, pargkinData,poiData]).subscribe(results=>{
      this.vehicle = results[0],
      this.parking = results[1],
      this.poi = results[2]
      this.loading = true;
    })
  }

  get vehicles():any {return this.vehicle.objects}  

  get parkings():any {return this.parking.objects}  

  get pois():any {return this.poi.objects}  

  get lat():any {return this.vehicle.objects[0].location.latitude}  
  
  get lng():any {return this.vehicle.objects[0].location.longitude}  

}
