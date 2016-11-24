import { Component, Input } from '@angular/core';
import { PokemonService } from 'app/pokemon/pokemon.service';
import { pokemon } from 'app/pokemon/pokemon.model';
import { ExcelRowComponent } from './excel-row.component';

@Component({
  selector: 'workspace',
  templateUrl: 'app/workspace/workspace.component.html',
  styleUrls: ['app/workspace/workspace.component.css']
})
export class WorkspaceComponent implements OnInit {	
	pokeList: pokemon[];
	selPokemon: pokemon;
	
	constructor(private pokeSrv: PokemonService) { }
	
	ngOnInit(): void {
		this.getPokemon();
		this.selectPoke(this.pokeList[0]);
	}
	
	getPokemon(): void {
		this.pokeList = this.pokeSrv.getPokemon();
		
		
		/*for (let i in this.selPokemon.evol) {
			//Convert the evol id to a copy of the actual pokemon from the list
			this.selPokemon.evol[i] = this.pokeList[this.selPokemon.evol[i].id-1];
		}*/
		
		/*
		if($scope.pokemon.evol) {
			for (var j=0; j < $scope.pokemon.evol.length; j++) {
				var evol = util.getPokemonByNumber($scope.pokemon.evol[j].number);
				
				if (!evol) return;
				$scope.pokemon.evol[j] = angular.copy(evol);
			}
		}
		*/
	}
	
	selectPoke(pokemon): void {
		this.selPokemon = pokemon;
	}
	
}
