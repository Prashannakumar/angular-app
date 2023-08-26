import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure : false
})
export class FilterPipe implements PipeTransform {

  transform(data: string[], searchData:string): string[] {

    console.log("Filter transform invoked");

    if(data.length==0 || searchData=='')
    {
      return data;
    }

    var tempArr = [];

    for(let i = 0; i < data.length; i++)
    {
      if(data[i].toLowerCase().includes(searchData.toLowerCase()))
      {
        tempArr.push(data[i]);
      }
    }

    return tempArr;
    
  }

}
