import { Component, Input } from '@angular/core';
import { pokemon } from '../../pokemon/pokemon.model';
import { PokemonService } from '../../pokemon/pokemon.service';

@Component({
  selector: 'excel-row',
  templateUrl: 'app/workspace/excel/excel-row.component.html',
  styleUrls: ['app/workspace/excel/excel.css']
})
export class ExcelRowComponent {
	@Input() poke: pokemon;
	@Input() pokeIndex: number;
	@Input() expandAll: number;
	@Input() filterFlag: string;
	
	constructor(private pokeSrv: PokemonService) { }

	ngOnInit(): void {		
		for (let i in this.poke.evol) {
			var evol = this.pokeSrv.getPokemonById(this.poke.evol[i].id);
			this.poke.evol[i] = JSON.parse(JSON.stringify(evol));
		}
		
		for (let i in this.poke.preEvol) {
			var preEvol = this.pokeSrv.getPokemonById(this.poke.preEvol[i].id);
			this.poke.preEvol[i] = JSON.parse(JSON.stringify(preEvol));
		}
		
		if (this.poke.cp) this.cpCalc();
		
		if (!this.poke.statAppraise) { this.poke.statAppraise = {Attack: false, Defence: false, Stamina: false} }
	}
	
	cpCalc() {
		//TODO: Got to be a cleaner way... but may not be worth the lose of performance
		if (this.poke.cp > 9999) this.poke.cp = 9999;
		
		this.cpCalcEvol();
		this.cpCelcPreEvol();
	}
	
	addRow() {
		this.pokeSrv.add(this.pokeIndex);
	}

	removeRow() {
		this.pokeSrv.remove(this.pokeIndex);
	}
	
	expandRow() {
		
	}
	
	private cpCalcEvol() {
		if (!this.poke.evol) { return };

		if (!this.poke.cp || this.poke.cp === 0) {
			this.poke.evol[0].minCp = null;
			this.poke.evol[0].maxCp = null;
			
			if (this.poke.evol.length === 2) {
				this.poke.evol[1].minCp = null;
				this.poke.evol[1].maxCp = null;
			}
			
			return;
		}
		
		this.poke.evol[0].minCp = Math.floor(this.poke.cp * this.poke.evol[0].minMulti);
		this.poke.evol[0].maxCp = Math.floor(this.poke.cp * this.poke.evol[0].maxMulti);

		if (this.poke.evol.length === 2) {
			this.poke.evol[1].minCp = Math.floor(this.poke.evol[0].minCp * this.poke.evol[1].minMulti);
			this.poke.evol[1].maxCp = Math.floor(this.poke.evol[0].maxCp * this.poke.evol[1].maxMulti);
		}
	}

	private cpCelcPreEvol() {
		if (!this.poke.preEvol) { return };
		
		if (!this.poke.cp || this.poke.cp === 0) {
			this.poke.preEvol[0].cpReq = null;
			
			if (this.poke.preEvol.length === 2) {
				this.poke.preEvol[1].cpReq = null;
			}
			return
		}
		
		this.poke.preEvol[0].cpReq = Math.ceil(this.poke.cp/this.poke.minMulti);
		
		if (this.poke.preEvol.length === 2) {
			this.poke.preEvol[0].cpReq = Math.ceil(this.poke.cp/this.poke.minMulti/this.poke.preEvol[1].minMulti);
			this.poke.preEvol[1].cpReq = Math.ceil(this.poke.cp/this.poke.minMulti);
		}
	}
}


