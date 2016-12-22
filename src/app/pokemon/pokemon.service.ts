import { Injectable } from '@angular/core';
import { pokemon } from './pokemon.model';
import { POKEMON } from './pokemon.list';

@Injectable()
export class PokemonService {
	private pokemonList = JSON.parse(JSON.stringify(POKEMON));
	private pokedex = new Map<number, pokemon>();
	
	getPokemonFreshInventory(): pokemon[] {
		return this.pokemonList;
	}
	
	getPokedex(): Map<number, pokemon> {
		for ( let poke of POKEMON ) {
			this.pokedex.set(poke.id, poke) 
		}
	
		return this.pokedex;
	}

	candyInput(pokemon) {
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
	
	cpCalc(pokemon) {
		for (let i in pokemon.evol) {
			pokemon.evol[i].name = this.pokedex.get(pokemon.evol[i].id).name;
			if ( +i === 0 ) {
				pokemon.evol[i].minCp = Math.floor(pokemon.cp * this.pokedex.get(pokemon.evol[i].id).minMulti);
				pokemon.evol[i].maxCp = Math.floor(pokemon.cp * this.pokedex.get(pokemon.evol[i].id).maxMulti);
			} else if ( +i > 0 ) {
				pokemon.evol[i].minCp = Math.floor(pokemon.evol[i-1].minCp * this.pokedex.get(pokemon.evol[i].id).minMulti);
				pokemon.evol[i].maxCp = Math.floor(pokemon.evol[i-1].maxCp * this.pokedex.get(pokemon.evol[i].id).maxMulti);
			}
		}
		
		if (pokemon.preEvol && pokemon.preEvol.length === 1 ) {
			pokemon.preEvol[0].name = this.pokedex.get(pokemon.preEvol[0].id).name;
			pokemon.preEvol[0].minCp = Math.ceil(pokemon.cp/pokemon.minMulti);
		} else if (pokemon.preEvol && pokemon.preEvol.length === 2) {			
			pokemon.preEvol[0].name = this.pokedex.get(pokemon.preEvol[0].id).name;
			pokemon.preEvol[0].minCp = Math.ceil(pokemon.cp/pokemon.minMulti);
			
			pokemon.preEvol[1].name = this.pokedex.get(pokemon.preEvol[1].id).name;
			pokemon.preEvol[1].minCp = Math.ceil(pokemon.cp/this.pokedex.get(pokemon.preEvol[0].id).minMulti/pokemon.minMulti);
		}
	}
}