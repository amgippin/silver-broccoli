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
	public readonly pokedex: Map = this.pokeSrv.getPokedex();
	
	cpCalc(pokemon) {
		if(pokemon.cp < 0 || pokemon.cp > 9999) { 
			pokemon.cp = null; 
			
			//TODO: Better Warning
			window.alert('invalid input');
		}
		this.pokeSrv.cpCalc(this.poke);
	}
}
