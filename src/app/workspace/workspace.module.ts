import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewareaComponent } from './viewarea/viewarea.component';
import { ExcelRowComponent } from './excel-row.component';
import { PokemonService } from '../pokemon/pokemon.service';
import { PokemonModule } from '../pokemon/pokemon.module';

@NgModule({
	imports: [ BrowserModule, FormsModule, PokemonModule ],
	declarations:	[ SidebarComponent, ViewareaComponent, ExcelRowComponent ],
	providers: [ PokemonService ],
	exports: [ ExcelRowComponent ]
})

export class WorkspaceModule { }