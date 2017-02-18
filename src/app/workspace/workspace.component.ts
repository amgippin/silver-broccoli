import { Component, Input } from '@angular/core';

//TODO: Still needed?
import { pokemon } from '../pokemon/pokemon.model';
import { PokemonService } from '../pokemon/pokemon.service';

@Component({
  selector: 'workspace',
  templateUrl: 'app/workspace/workspace.component.html'
})
export class WorkspaceComponent {	
	public radioModel: string = 'cp'; // buddy, cp
	public pokemonInventory: pokemon[] = [];
	
	constructor(private pokeSrv: PokemonService) { }
	
	ngOnInit() {
		this.pokemonInventory = this.pokeSrv.getPokemonFreshInventory();
	}
}
