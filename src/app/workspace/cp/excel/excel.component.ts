import { Component, Input } from '@angular/core';

import { FilterCpAvilOnlyPipe } from './excel.pipe';
import { pokemon } from '../../../pokemon/pokemon.model';
import { PokemonService } from '../../../pokemon/pokemon.service';

@Component({
  selector: 'excel-view',
  templateUrl: 'app/workspace/cp/excel/excel.component.html',
  styleUrls: ['app/workspace/shared.css'],
})
export class ExcelComponent {	
	constructor(
		private pokeSrv: PokemonService,
	) { }
	
	@Input() pokemonInventory: pokemon[];
	
	public filterFlag: string = 'all';
	public readonly pokedex: Map<number, pokemon> = this.pokeSrv.getPokedex();
	
	ngOnInit() {
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
		
		//this.pokemonInventory.splice(+i, 0, poke);
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
}
