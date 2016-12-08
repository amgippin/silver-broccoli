import { Component, Input } from '@angular/core';

import { pokemon } from '../../pokemon/pokemon.model';
import { PokemonService } from '../../pokemon/pokemon.service';

@Component({
  selector: 'single-view',
  templateUrl: 'app/workspace/single/single-view.component.html',
  styleUrls: ['app/workspace/single/single.css']
})
export class SingleViewComponent { 
	constructor(private pokeSrv: PokemonService) { }
	
	public pokemonSideBarList = this.pokeSrv.getPokemonRefList();
	public pokemonVieaAreaList = this.pokeSrv.getPokemonList();
	
	public selPokemon: pokemon;
	
	ngOnInit(): void {
		this.selectPoke(this.pokemonSideBarList[0].id);
		//if(!this.selPokemon.statAppraise) { this.selPokemon.statAppraise = { var Attack=false, var Defense=false, var Stamina=false}};
	}
	
	selectPoke(pokemonId:number): void {
		this.selPokemon = JSON.parse(JSON.stringify(this.pokemonSideBarList[pokemonId-1]));
		var extra: pokemon[] = [];
		
		for (var i in this.pokemonVieaAreaList) {
			this.pokemonVieaAreaList[i].masterIndex = +i;
			if (this.pokemonVieaAreaList[i].id === pokemonId) {
				extra.push(this.pokemonVieaAreaList[i]);
			}
		}
		this.selPokemon.extra = extra;
	}
	
	forceUpdate(): void {
		//this.selectPoke(this.poke.id);
	}
}