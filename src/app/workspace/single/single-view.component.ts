import { Component, Input } from '@angular/core';

import { pokemon } from '../../pokemon/pokemon.model';
import { PokemonService } from '../../pokemon/pokemon.service';

@Component({
  selector: 'single-view',
  templateUrl: 'app/workspace/single/single-view.component.html',
  styleUrls: ['app/workspace/single/single.css']
})
export class SingleViewComponent { 
	constructor(private pokeSrv: PokemonService) { }
	
	public pokeList: pokemon[] = this.pokeSrv.getPokemonList();
	private selPokemon: pokemon;
	
	ngOnInit(): void {
		this.selectPoke(this.pokeList[0]);
	}
	
	selectPoke(pokemon): void {
		this.selPokemon = pokemon;
	}
}