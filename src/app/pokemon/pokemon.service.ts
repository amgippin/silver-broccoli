import { Injectable } from '@angular/core';
import { pokemon } from 'app/pokemon/pokemon.model';
import { POKEMON } from 'app/pokemon/pokemon.list';

@Injectable()
export class PokemonService {
	getPokemon(): pokemon[] {
		return POKEMON;
	}
}