import { Component, Input } from '@angular/core';

import { pokemon } from '../../pokemon/pokemon.model';
import { PokemonService } from '../../pokemon/pokemon.service';

@Component({
  selector: 'buddy-related',
  templateUrl: 'app/workspace/buddy/buddy.component.html',
  styleUrls: ['app/workspace/buddy/buddy.css', 'app/workspace/shared.css']
})
export class BuddyComponent {
	constructor(private pokeSrv: PokemonService) { }
	
	public radioModel = '1';
	
	public buddyList: pokemon[] = [];
	public readonly pokedex: Map<number, pokemon> = this.pokeSrv.getPokedex();
	public pokemonInventory: pokemon[] = this.pokeSrv.getPokemonFreshInventory();
	
	onCandyInput(pokemon) {
		if(pokemon.candyHave > -1) this.pokeSrv.candyInput(pokemon);
		else pokemon.candyHave = 0;
	}
	
	onClearList(event) {
		this.buddyList = [];
		this.pokemonInventory = this.pokeSrv.getPokemonFreshInventory();
	}
	
	onListUpdate(event) {
		this.buddyList = event;
	}
}
