import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { pokemon } from '../../../../pokemon/pokemon.model';
import { PokemonService } from '../../../../pokemon/pokemon.service';

@Component({
  selector: 'sidebar',
  templateUrl: 'app/workspace/shared/components/sidebar/sidebar.component.html',
  styleUrls: ['app/workspace/shared/components/sidebar/sidebar.css'],
})
export class SidebarComponent implements OnInit{
	@Input() inputList: pokemon[];
	@Input() returnList: boolean;
	@Output() clearList: EventEmitter<boolean> = new EventEmitter<boolean>();
	@Output() outputList: EventEmitter<pokemon[]> = new EventEmitter<pokemon[]>();
	@Output() outputItem: EventEmitter<pokemon> = new EventEmitter<pokemon>();
	
	public selectedFilter = 'a';
	public selectedGen: number = 0;
	public selectedList: pokemon[] = [];
	public selectedPokemon: pokemon;
	
	ngOnInit(): void {
		this.selectedPokemon = this.inputList[0];
		this.outputItem.emit(this.selectedPokemon);
	}
	
	onClearSelection(): void {
		this.selectedList = [];
		this.clearList.emit(true);
	}
	
	onClearFilter(): void {
		this.selectedGen = 0;
		this.selectedFilter = 'a';
	}
	
	onFilterSelect(filter): void {
		this.selectedFilter = filter;
	}
	
	onGenSelection(gen): void {
		this.selectedGen = gen;
	}
	
	onSelect(item): void {
		if (this.returnList) {
			item.selected = !item.selected;
			
			if (item.selected) this.selectedList.push(item);
			else this.removeItem(item);
			
			this.outputList.emit(this.selectedList);
		} else {
			this.selectedPokemon.selected = false;
			item.selected = true;
			this.selectedPokemon = item;
			this.outputItem.emit(this.selectedPokemon);
		}
	}

	private removeItem(item) {
		for (var i = 0; i < this.selectedList.length; i++) {
			if (this.selectedList[i].id === item.id) {
				this.selectedList.splice(i, 1);
				item.selected = false;
				return;
			}
		}
	}
}
