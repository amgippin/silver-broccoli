import { Component, Input } from '@angular/core';

import { pokemon } from '../../../pokemon/pokemon.model';
import { PokemonService } from '../../../pokemon/pokemon.service';
import { SearchFilterPipe } from './search.pipe';

@Component({
  selector: 'single-view',
  templateUrl: 'app/workspace/cp/single/single.component.html'
})
export class SingleComponent {	
	constructor(
		private pokeSrv: PokemonService,
	) { }
	@Input() pokemonInventory: pokemon[];
	
	public readonly pokedex: Map<number, pokemon> = this.pokeSrv.getPokedex();
	public readonly sidebarList: pokemon[] = this.pokeSrv.getPokemonFreshInventory();
	
	public sidebarSearch: string;
	
	selPokemon: pokemon;
	
	
	selectPoke(pokemon) {
		this.selPokemon = pokemon;
		
		var pokeArray: pokemon[] = [];
		var i = 0;
		while(this.pokemonInventory[i].id < pokemon.id) {
			if(this.pokemonInventory[i].id === pokemon.id){
				//pokeArray.splice(this.pokemonInventory, 0);
			}
		}
	}
}
