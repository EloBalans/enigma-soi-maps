import { PortalModule } from '@angular/cdk/portal';
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
  title:String = 'Enigma Google Maps';
  vehicleFilter1:String = ''
  vehicleFilter2:Number = 30
  parkingFilter1:Boolean = false
  parkingFilter2:Boolean = false
  poiFilter1:String = ''
  poiFilter2:String = ''
  cityList:any=[]
  categoryList:any =[]
  lat:number = 52.193848445949754
  lng:number= 20.92982985026838 
  zoom:number = 12;

  clusterStyle = [{
        url: "assets/icons/cluster.svg",
        width: 60,
        height: 60,
        textColor:"white"
  }];

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
      this.poiSortFilter(this.poi);
      this.loading = true;
    })
  }

  poiSortFilter(poi:any){
    const setCategories = new Set();
    const setCities = new Set();   
    for (const obj of poi.objects) {
      setCategories.add(obj.category);
      setCities.add(obj.address.city);
    }
    this.categoryList=Array.from(setCategories);
    this.cityList=Array.from(setCities);
  }
  
  acutalParkingIcon(space:String){
    let tempSpace = Number(space)
    if(tempSpace >0){
      return 'assets/icons/parking_icon_green.svg'
    }else{
      return 'assets/icons/parking_icon_red.svg'
    }
  }

  get vehicles():any {return this.vehicle.objects}  

  get parkings():any {return this.parking.objects}  

  get pois():any {return this.poi.objects}  


}
