import { Component, Input } from '@angular/core';

import { pokemon } from '../../pokemon/pokemon.model';
import { PokemonService } from '../../pokemon/pokemon.service';

@Component({
  selector: 'excel-view',
  templateUrl: 'app/workspace/excel/excel-view.component.html',
  styleUrls: ['app/workspace/excel/excel.css']
})
export class ExcelViewComponent {
	constructor(private pokeSrv: PokemonService) { }
	
	public pokeList: pokemon[] = this.pokeSrv.getPokemonList();
	
	public filterFlag: string = 'all';
	
	filterPokemon() {
		if (this.filterFlag === 'selected') {
			this.pokeList = this.pokeSrv.getPokemonList();
			this.pokeList = this.pokeList.filter(this.hasCp);
		} else if (this.filterFlag === 'unselected') {
			this.pokeList = this.pokeSrv.getPokemonList();
			this.pokeList = this.pokeList.filter(this.hasNoCp);
		} else {
			this.pokeList = this.pokeSrv.getPokemonList();
		}
		
	}
	
	private hasCp(pokemon) {
		return pokemon.cp;
	}
	
	private hasNoCp(pokemon) {
		return !pokemon.cp;
	}

}