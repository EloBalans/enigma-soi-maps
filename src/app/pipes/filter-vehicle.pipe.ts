import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterVehicle'
})
export class FilterVehiclePipe implements PipeTransform {

  transform(values: any[],filter:any=[],): any {

    let available:String=filter[0]
    let battery:Number=filter[1]

    if(available==null  ||battery==null ||
      typeof available=="undefined" ||typeof battery=="undefined" 
    ){
      return values
    }
    

    if(available.length>0&&battery>0){
      return values.filter((value)=>
      value.status==available
      && value.batteryLevelPct>battery
        )
    }
    if(available.length>0){
      return values.filter((value)=>
      value.status==available
      )
    }
    if(battery>0){
      return values.filter((value)=>
        value.batteryLevelPct>battery
        )
    }
    
    return values
  }

}
