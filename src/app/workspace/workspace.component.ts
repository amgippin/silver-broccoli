import { Component, Input } from '@angular/core';

//TODO: Still needed?
import { pokemon } from '../pokemon/pokemon.model';
import { PokemonService } from '../pokemon/pokemon.service';

@Component({
  selector: 'workspace',
  templateUrl: 'app/workspace/workspace.component.html',
  styleUrls: ['app/workspace/workspace.component.css']
})
export class WorkspaceComponent {	
	public radioModel: string = 'excel';

	/*
	constructor(private pokeSrv: PokemonService) { }
	
	public pokeList: pokemon[] = this.pokeSrv.getPokemonList();
	private selPokemon: pokemon;
	ngOnInit(): void {
		this.selectPoke(this.pokeList[0]);
	}
	
	selectPoke(pokemon): void {
		this.selPokemon = pokemon;
	}	*/
}
