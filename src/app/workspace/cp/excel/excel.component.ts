import { Component, Input } from '@angular/core';

import { pokemon } from '../../../pokemon/pokemon.model';

@Component({
  selector: 'excel-view',
  templateUrl: 'app/workspace/cp/excel/excel.component.html'
})
export class ExcelComponent {	
	@Input() pokemonInventory: pokemon[];
}
