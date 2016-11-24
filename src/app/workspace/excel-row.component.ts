import { Component, Input } from '@angular/core';
import { pokemon } from '../pokemon/pokemon.model';
import { PokemonService } from 'app/pokemon/pokemon.service';

@Component({
  selector: 'excel-row',
  templateUrl: 'app/workspace/excel-row.component.html',
  styleUrls: ['app/workspace/workspace.component.css']
})
export class ExcelRowComponent implements OnInit {
	@Input() poke: pokemon;
	pokeList: pokemon[] = this.pokeSrv.getPokemon();
	
	constructor(private pokeSrv: PokemonService) { }
	
	ngOnInit(): void {
		for (let i in this.poke.evol) {
			this.poke.evol[i] = Object.create(this.pokeList[this.poke.evol[i].id-1]);
		}
		
		if(this.poke.cp) this.cpCalc();
	}
	
	cpCalc() {
		if (!this.poke.evol || !this.poke.cp) { return }
		if (this.poke.cp > 9999) this.poke.cp = 9999;
		
		if(this.poke.evol.length === 2) {
			this.poke.evol[0].minCp = Math.floor(this.poke.cp * this.poke.evol[0].minMulti);
			this.poke.evol[0].maxCp = Math.floor(this.poke.cp * this.poke.evol[0].maxMulti);
			this.poke.evol[1].minCp = Math.floor(this.poke.evol[0].minCp * this.poke.evol[1].minMulti);
			this.poke.evol[1].maxCp = Math.floor(this.poke.evol[0].maxCp * this.poke.evol[1].maxMulti);
		} else {
			this.poke.evol[0].minCp = Math.floor(this.poke.cp * this.poke.evol[0].minMulti);
			this.poke.evol[0].maxCp = Math.floor(this.poke.cp * this.poke.evol[0].maxMulti);
		}
	}
}
