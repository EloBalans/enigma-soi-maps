import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPoi'
})
export class FilterPoiPipe implements PipeTransform {


  transform(values: any[],filter:any=[],): any {

    let category:String=filter[0]
    let city:String=filter[1]

    if(typeof category=="undefined" ||typeof city=="undefined" 
    ||category==null  ||city==null
    ){
      return values
    }
    
    if(category.length>0&&city.length>0){
      return values.filter((value)=>
        value.category==category&& 
        value.address.city==city
        )
    }
    if(category.length>0){
      return values.filter((value)=>
      value.category==category
      )
    }
    if(city.length>0){
      return values.filter((value)=>
        value.address.city==city
        )
    }
    
    return values
  }

}
