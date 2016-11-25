import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'hasCp' })
export class hasCpPipe implements PipeTransform {
	transform(value:number):boolean {
		return value > 0;
	} 
  
}