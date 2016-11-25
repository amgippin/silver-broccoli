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
}