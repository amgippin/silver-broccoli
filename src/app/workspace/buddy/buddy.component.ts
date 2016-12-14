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
	
		for (let i in pokemon.evol) {
			pokemon.evol[i].name = this.pokedex.get(pokemon.evol[i].id).name;
			
			if ( +i === 0 ) {
				pokemon.evol[i].candyNeed = pokemon.candy - pokemon.candyHave;
				pokemon.evol[i].catchNeed = Math.ceil(pokemon.evol[i].candyNeed/3);
				pokemon.evol[i].disNeed = pokemon.evol[i].candyNeed * this.pokedex.get(pokemon.evol[i].id).candyDis;
			} else if ( +i > 0 ) {
				pokemon.evol[i].candyNeed = this.pokedex.get(pokemon.evol[+i-1].id).candy - pokemon.candyHave;
				pokemon.evol[i].catchNeed = Math.ceil(pokemon.evol[i].candyNeed/3);
				pokemon.evol[i].disNeed = pokemon.evol[i].candyNeed * this.pokedex.get(pokemon.evol[i].id).candyDis;
			}
		}
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
