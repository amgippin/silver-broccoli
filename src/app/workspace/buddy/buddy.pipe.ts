import { Pipe } from '@angular/core';

import { pokemon } from '../../pokemon/pokemon.model';

@Pipe({ name: 'filterGen' })
export class FitlerGenPipe {
  transform(value: pokemon[], gen: number): pokemon [] {
    if(!value) { return [] }
	return value.filter( it => it['gen'] === +gen );
  }
}
