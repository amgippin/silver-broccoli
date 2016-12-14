import { Component, Input } from '@angular/core';

import { FitlerGenPipe } from './buddy.pipe';
import { pokemon } from '../../pokemon/pokemon.model';
import { PokemonService } from '../../pokemon/pokemon.service';


@Component({
  selector: 'buddy-related',
  templateUrl: 'app/workspace/buddy/buddy.component.html',
  styleUrls: ['app/workspace/buddy/buddy.css', 'app/workspace/shared.css'],
  pipes: [FitlerGenPipe]
})
export class BuddyComponent {
	constructor(
		private pokeSrv: PokemonService,
	) { }
	
	public radioModel = '1';
	
	public buddyList: pokemon[] = [];
	public readonly pokedex: Map = this.pokeSrv.getPokedex();
	public pokemonInventory: pokemon[] = this.pokeSrv.getPokemonFreshInventory();
	
	selectPoke(pokemon) {
		pokemon.selected = !pokemon.selected;
		
		if(pokemon.selected) { this.buddyList.push(pokemon) }
		else { this.removePokemon(pokemon) }
	}

	candyInput(pokemon) {
		if (pokemon.candyHave < 0) { pokemon.candyHave = 0; }
	
		this.pokeSrv.candyInput(pokemon);
	}
	
	removePokemon(pokemon) {
		for (let i in this.buddyList) {
			if (this.buddyList[+i].id === pokemon.id) {
				this.buddyList.splice(+i, 1);
				pokemon.selected = false;
				return;
			}
		}
	}
}
