import { Component, Input, OnInit } from '@angular/core';

import { pokemon } from '../../../pokemon/pokemon.model';
import { PokemonService } from '../../../pokemon/pokemon.service';
import { SearchFilterPipe } from './search.pipe';

@Component({
  selector: 'single-view',
  templateUrl: 'app/workspace/cp/single/single.component.html'
})
export class SingleComponent implements OnInit {	
	@Input() pokemonInventory: pokemon[];
	
	constructor(
		private pokeSrv: PokemonService,
	) { }

	public readonly pokedex: Map<number, pokemon> = this.pokeSrv.getPokedex();
	public readonly sidebarList: pokemon[] = this.pokeSrv.getPokemonFreshInventory();
	
	sidebarSearch: string;
	pokeArray: pokemon[] = [];
	selPokemon: pokemon = null;
	
	ngOnInit() {
		this.selectPoke(this.sidebarList[0]);
	}
	
	selectPoke(pokemon) {
		this.selPokemon = pokemon;
	
		var i = 0;
		while(this.pokemonInventory[i].id < pokemon.id) {
			if(this.pokemonInventory[i].id === pokemon.id){
				this.pokeArray.splice(this.pokemonInventory, 0);
			}
			i++;
		}
	}
}
