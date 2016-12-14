import { Pipe } from '@angular/core';

import { pokemon } from '../../../pokemon/pokemon.model';

@Pipe({ name: 'filterCpAvil' })
export class FilterCpAvilOnlyPipe {
  transform(value: pokemon[], selection: string): pokemon [] {
    if(!value) { return [] }
	
	if(selection === 'avail') { return value.filter( it => it['cp'] ); }
	else if(selection === 'unavail'){ return value.filter( it => it['cp'] === undefined); }
	else { return value;}
  }
}
