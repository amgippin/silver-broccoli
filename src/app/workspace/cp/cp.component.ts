import { Component, Input } from '@angular/core';

import { pokemon } from '../../pokemon/pokemon.model';

@Component({
  selector: 'cp-related',
  templateUrl: 'app/workspace/cp/cp.component.html'
})
export class CpComponent {	
	@Input() pokemonInventory: pokemon[];
	
	public radioModel: string = 'cp';
}
