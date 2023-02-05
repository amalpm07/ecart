import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[],filterString:string,propName:string):any {  
    const result:any=[]
    if(!value || filterString=="" || propName==""){
      return value
    }
    value.forEach((item:any)=>{
     if( item[propName].trim().toLowerCase().includes(filterString.toLowerCase()) ){    //trim is used for removing whitspace  //toLowerCase is used for sreing into lowercase
result.push(item)
     }    
    })
    return result;
  }

}
