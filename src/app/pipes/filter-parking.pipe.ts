import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterParking'
})
export class FilterParkingPipe implements PipeTransform {

  transform(values: any[],filter:any=[],): any {

    let freeSpace:Boolean=filter[0]
    let chargers:Boolean=filter[1]
 
    if(freeSpace==null  ||chargers==null ||
      typeof freeSpace=="undefined" ||typeof chargers=="undefined" 
    ){
      return values
    }

    if(freeSpace&&chargers){
      return values.filter((value)=>
        value.availableSpacesCount>0
        &&  value.chargers.length>0
      )
    }

    if(freeSpace){
      return values.filter((value)=>
        value.availableSpacesCount>0
      )
    }

    if(chargers){
      return values.filter((value)=>
         value.chargers.length>0
      )
    }
    
    return values
  }


}
