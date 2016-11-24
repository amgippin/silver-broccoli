import { Component, Input } from '@angular/core';
import { ViewareaComponent } from 'app/workspace/viewarea/viewarea.component';
import { SidebarComponent } from 'app/workspace/sidebar/sidebar.component';
import { PokemonService } from 'app/pokemon/pokemon.service';
import { pokemon } from 'app/pokemon/pokemon.model';
import { PokemonSearchPipe } from 'app/pokemon/pokemon-search.pipe';
import { PokemonSearchComponent } from 'app/pokemon/pokemon-search.component';

@Component({
  selector: 'workspace',
  templateUrl: 'app/workspace/workspace.component.html',
  styleUrls: ['app/workspace/workspace.component.css']
  providers: [PokemonService],
  directives: [PokemonSearchComponent],
  pipes: [PokemonSearchPipe]
})
export class WorkspaceComponent implements OnInit {	
	@Input() term;

	pokeList: pokemon[];
	selPokemon: pokemon;
	
	constructor(private pokeSrv: PokemonService) { }
	
	ngOnInit(): void {
		this.getPokemon();
		this.selectPoke(this.pokeList[0]);
	}
	
	getPokemon(): void {
		this.pokeList = this.pokeSrv.getPokemon();
	}
	
	selectPoke(pokemon): void {
		this.selPokemon = pokemon;
		for (let i in this.selPokemon.evol) {
			//Convert the evol id to a copy of the actual pokemon from the list
			this.selPokemon.evol[i] = this.pokeList[this.selPokemon.evol[i].id-1];
		}
	}
	
}
