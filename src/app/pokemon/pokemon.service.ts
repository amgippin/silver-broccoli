import { Injectable } from '@angular/core';
import { pokemon } from './pokemon.model';
import { POKEMON } from './pokemon.list';

@Injectable()
export class PokemonService {
	private pokemonList = JSON.parse(JSON.stringify(POKEMON));
	
	getPokemonFreshInventory(): pokemon[] {
		return this.pokemonList;
	}
	
	getPokedex(): Map {
		var pokedex = new Map();
		
		for ( let poke of POKEMON ) {
			pokedex.set(poke.id, poke) 
		}
	
		return pokedex;
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
	
	add(index) {
		//TODO: Do I need the temp var for the indexes?
		var k = this.pokemonList[index].id - 1;
		var temp = JSON.parse(JSON.stringify(POKEMON[k]));
		temp.cp = null;
		temp.new = true;

		var l = +index + 1;		
		this.pokemonList.splice(l, 0, temp);
	}
	
	remove(index){
		this.pokemonList.splice(index, 1)
	}
	
	loadHash() {
		window.alert('tag');
	}
}