import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uSDtoEGP'
})

export class USDtoEGPPipe implements PipeTransform {

  transform(val : number , exRate:number = 15.6 ): number {
    return Number(val) * 15.6;
  }

}
