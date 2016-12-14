import { Injectable } from '@angular/core';
import { pokemon } from './pokemon.model';
import { POKEMON } from './pokemon.list';

@Injectable()
export class PokemonService {
	private pokemonList = JSON.parse(JSON.stringify(POKEMON));
	private pokedex = this.createPokedex();
	
	getPokemonFreshInventory(): pokemon[] {
		return this.pokemonList;
	}
	
	getPokedex(): Map<int, pokemon> {
		return this.pokedex;
	}
	
	//TODO: Clean up
	getPokemonList(): pokemon[] {
		return this.pokemonList;
	}
	
	getPokemonRefList(): pokemon[] {
		return POKEMON;
	}
	
	getPokemonById(id): pokemon {
		var i = +id - 1;	
		return POKEMON[i];
	}
	
	cpCalc(pokemon) {
		
	}
	
	//TODO: Why can't I make this private?
	createPokedex() Map<int, pokemon> {
		var pokedex = new Map();
		
		for ( let poke of POKEMON ) {
			pokedex.set(poke.id, poke) 
		}
	
		return pokedex;
	}
}