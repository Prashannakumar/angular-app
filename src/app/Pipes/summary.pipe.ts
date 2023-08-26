import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
  pure : true
})
export class SummaryPipe implements PipeTransform {

  constructor()
  {
    //console.log("Summary Pipe Created");
  }

  transform(value: string, limit:number): string {

    console.log("Summary Transform invoked");

    if(value.length > limit)
    {
      return value.substr(0, limit)+"...";
    }

    return value;
  }

}
