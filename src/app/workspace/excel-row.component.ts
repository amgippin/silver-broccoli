import { Component, Input } from '@angular/core';
import { pokemon } from '../pokemon/pokemon.model';
import { PokemonService } from '../pokemon/pokemon.service';
import { ButtonsModule, ButtonCheckboxDirective, ButtonRadioDirective } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'excel-row',
  templateUrl: 'app/workspace/excel-row.component.html',
  styleUrls: ['app/workspace/workspace.component.css']
})
export class ExcelRowComponent {
	@Input() poke: pokemon;
	@Input() pokeIndex: number;
	
	public radioModel:string = 'Perfect';
	public checkModel:any = {Attack: false, Defense: false, Stamina: false};
	
	constructor(private pokeSrv: PokemonService) { }
	
	
	
	ngOnInit(): void {
		for (let i in this.poke.evol) {
			var evol = this.pokeSrv.getPokemonById(this.poke.evol[i].id);
			this.poke.evol[i] = JSON.parse(JSON.stringify(evol));
		}
		
		if(this.poke.cp) this.cpCalc();
	}
	
	cpCalc() {
		//TODO: Got to be a cleaner way... but may not be worth the lose of performance
		if (this.poke.cp > 9999) this.poke.cp = 9999;
		
		if (!this.poke.evol) { return } 
		//if (!this.poke.cp) { return }

		if (!this.poke.cp || this.poke.cp === 0) {
			this.poke.evol[0].minCp = null;
			this.poke.evol[0].minCp = null;
			
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
	
	addRow() {
		this.pokeSrv.add(this.pokeIndex);
	}

	removeRow() {
		this.pokeSrv.remove(this.pokeIndex);
	}
	
}

