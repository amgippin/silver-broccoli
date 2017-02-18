import { Component, Input, OnInit } from '@angular/core';

import { pokemon } from '../../../pokemon/pokemon.model';
import { PokemonService } from '../../../pokemon/pokemon.service';

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
		for(let poke of this.pokemonInventory) {
			if(poke.cp) { this.cpCalc(poke); }
		
			if (!poke.statAppraise) { poke.statAppraise = {Attack: false, Defence: false, Stamina: false} }
		}
	}
	
	onAdd(pokemonId, index) {
		var newPoke = JSON.parse(JSON.stringify(this.pokedex.get(pokemonId)));
		if (!newPoke.statAppraise) { newPoke.statAppraise = {Attack: false, Defence: false, Stamina: false} }
		newPoke.new = true;
		this.pokemonInventory.splice(+index+1, 0, newPoke);
	}
	
	onCalc(pokemon) {
		this.cpCalc(pokemon);
	}
	
	onPokemonSelect(event) {
		this.selectPoke(event);
	}
	
	onRemove(index) {
		this.pokemonInventory.splice(index, 1);
	}
	
	private cpCalc(pokemon) {
		if(pokemon.cp < 0 || pokemon.cp > 9999) { 
			pokemon.cp = null; 
			
			//TODO: Better Warning
			window.alert('invalid input');
		}
		this.pokeSrv.cpCalc(pokemon);
	}
	
	private selectPoke(pokemon) {
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

