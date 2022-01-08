import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { RootObject } from '../interface/vehicle';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = 'https://dev.vozilla.pl/api-client-portal/map?objectType='
  constructor(private http:HttpClient) { }

  getVehicleList():Observable<RootObject[]>{
    return this.http.get<RootObject[]>(this.APIUrl+'VEHICLE')
  }

  getParkingList():Observable<RootObject[]>{
    return this.http.get<RootObject[]>(this.APIUrl+'PARKING')
  }
  getPoiList():Observable<RootObject[]>{
    return this.http.get<RootObject[]>(this.APIUrl+'POI')
  }

}
