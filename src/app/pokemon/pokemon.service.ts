import { Injectable } from '@angular/core';
import { pokemon } from './pokemon.model';
import { POKEMON } from './pokemon.list';

@Injectable()
export class PokemonService {
	private pokedex = new Map<number, pokemon>();
	
	getPokemonFreshInventory(): pokemon[] {
		return JSON.parse(JSON.stringify(POKEMON));
	}
	
	getPokedex(): Map<number, pokemon> {
		for ( let poke of POKEMON ) {
			this.pokedex.set(poke.id, poke) 
		}
	
		return this.pokedex;
	}

	candyInput(pokemon) {
		if(pokemon.evol1) {
			for(var i = 0; i < pokemon.evol1.length; i++){
				pokemon.evol1[i].name = this.pokedex.get(pokemon.evol1[i].id).name;
				
				pokemon.evol1[i].candyNeed = pokemon.candy - pokemon.candyHave;
				pokemon.evol1[i].catchNeed = Math.ceil(pokemon.evol1[i].candyNeed/3);
				pokemon.evol1[i].disNeed = pokemon.evol1[i].candyNeed * this.pokedex.get(pokemon.evol1[i].id).candyDis;
			}
			
			if(pokemon.evol2) {
				for(var i = 0; i < pokemon.evol2.length; i++){
					pokemon.evol2[i].name = this.pokedex.get(pokemon.evol2[i].id).name;
					
					pokemon.evol2[i].candyNeed = this.pokedex.get(pokemon.evol1[0].id).candy - pokemon.candyHave;
					pokemon.evol2[i].catchNeed = Math.ceil(pokemon.evol2[i].candyNeed/3);
					pokemon.evol2[i].disNeed = pokemon.evol2[i].candyNeed * this.pokedex.get(pokemon.evol2[i].id).candyDis;
				}
			}
		}
	}
	
	cpCalc(pokemon) {
		if(pokemon.evol1) {
			for(var i = 0; i < pokemon.evol1.length; i++){
				pokemon.evol1[i].name = this.pokedex.get(pokemon.evol1[i].id).name;
				pokemon.evol1[i].minCp = Math.floor(pokemon.cp * this.pokedex.get(pokemon.evol1[i].id).minMulti);
				pokemon.evol1[i].maxCp = Math.floor(pokemon.cp * this.pokedex.get(pokemon.evol1[i].id).maxMulti);
			}
			
			if(pokemon.evol2) {
				for(var i = 0; i < pokemon.evol2.length; i++){
					pokemon.evol2[i].name = this.pokedex.get(pokemon.evol2[i].id).name;
					pokemon.evol2[i].minCp = Math.floor(pokemon.evol1[0].minCp * this.pokedex.get(pokemon.evol2[i].id).minMulti);
					pokemon.evol2[i].maxCp = Math.floor(pokemon.evol1[0].maxCp * this.pokedex.get(pokemon.evol2[i].id).maxMulti);
				}
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