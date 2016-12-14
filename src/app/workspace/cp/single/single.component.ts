import { Component, Input } from '@angular/core';

import { pokemon } from '../../../pokemon/pokemon.model';

@Component({
  selector: 'single-view',
  templateUrl: 'app/workspace/cp/single/single.component.html'
})
export class SingleComponent {	
	@Input() pokemonInventory: pokemon[];
}
