import { Pipe } from '@angular/core';

import { pokemon } from '../../../../pokemon/pokemon.model';

@Pipe({ name: 'filterGen' })
export class FitlerGenPipe {
  transform(value: pokemon[], gen: number): pokemon [] {
    if(!value) return [];
	// Zero is default/all
	if( gen === 0 ) return value;
	
	return value.filter( it => it['gen'] === gen );
  }
};

@Pipe({name:'filterSelect'})
export class FilterSelectPipe {
	transform(value: pokemon[], filter:string): pokemon [] {
		if(!value) return [];
		if(filter === 'u') return value.filter( it => !it['selected'] );
		if(filter === 's') return value.filter( it => it['selected'] === true );
		
		return value;
	}
};
