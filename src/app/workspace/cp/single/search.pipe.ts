import { Pipe } from '@angular/core';

import { pokemon } from '../../../pokemon/pokemon.model';

@Pipe({ name: 'searchFilter' })
export class SearchFilterPipe {
  transform(value: pokemon[], searchString: string): pokemon [] {
    if(!value) { return [] }
	return value.filter( it => it['name'] === searchString );
  }
}
