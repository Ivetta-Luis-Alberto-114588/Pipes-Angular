import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversor'
})
export class ConversorPipe implements PipeTransform {

  transform(value: number, ...args: any[]): number {
   
    
    if(args[0]==="div")
    {
      return value / 2;
    }

    if(args[0]==="multi")
    {
      return value *2;
    }
    else 
    {
      return value;

    }

    
    
  }

}
