import { Component, Input, OnInit } from '@angular/core';

import { pokemon } from '../../../pokemon/pokemon.model';
import { PokemonService } from '../../../pokemon/pokemon.service';
import { SearchFilterPipe } from './search.pipe';

@Component({
  selector: 'single-view',
  templateUrl: 'app/workspace/cp/single/single.component.html',
  styleUrls: ['app/workspace/shared.css'],
})
export class SingleComponent implements OnInit {	
	@Input() pokemonInventory: pokemon[];
	
	constructor(private pokeSrv: PokemonService) { }

	public readonly pokedex: Map<number, pokemon> = this.pokeSrv.getPokedex();
	public readonly sidebarList: pokemon[] = this.pokeSrv.getPokemonFreshInventory();
	
	sidebarSearch: string;
	pokeArray: pokemon[] = [];
	selPokemon: pokemon = null;
	
	ngOnInit() {
		this.selectPoke(this.sidebarList[0]);
		
		for(let poke of this.pokemonInventory) {
			if(poke.cp) { this.cpCalc(poke); }
		
			if (!poke.statAppraise) { poke.statAppraise = {Attack: false, Defence: false, Stamina: false} }
		}
	}
	
	addRow(pokemonId, index) {
		var newPoke = JSON.parse(JSON.stringify(this.pokedex.get(pokemonId)));
		if (!newPoke.statAppraise) { newPoke.statAppraise = {Attack: false, Defence: false, Stamina: false} }
		newPoke.new = true;
		this.pokemonInventory.splice(+index+1, 0, newPoke);
	}
	
	cpCalc(pokemon) {
		if(pokemon.cp < 0 || pokemon.cp > 9999) { 
			pokemon.cp = null; 
			
			//TODO: Better Warning
			window.alert('invalid input');
		}
		this.pokeSrv.cpCalc(pokemon);
	}

	removeRow(index) {
		this.pokemonInventory.splice(index, 1);
	}
	
	selectPoke(pokemon) {
		var result = []
		this.selPokemon = pokemon;
		
		var i = 0;
		while(this.pokemonInventory[i].id <= pokemon.id) {
			if(this.pokemonInventory[i].id === pokemon.id){
				result.push(this.pokemonInventory[i]);
			}
			i++;
		}
		
		this.pokeArray = result;
	}
}
