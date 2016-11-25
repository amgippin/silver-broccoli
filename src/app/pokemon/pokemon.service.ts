import { Injectable } from '@angular/core';
import { pokemon } from './pokemon.model';
import { POKEMON } from './pokemon.list';

@Injectable()
export class PokemonService {
	public pokemonList = Object.create(POKEMON);
	
	getFreshPokemonList(): pokemon[] {
		return POKEMON;
	}
	
	getCurrentPokemonList(): pokemon[] {
		return this.pokemonList;
	}
	
	getPokemonById(id): pokemon {
		var i = +id - 1;
		return POKEMON[i];
	}
	
	updateEvolValue(index, evolNum, valueName, value) {
		this.pokemonList[index].evol[evolNum].minCp = value;
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
}