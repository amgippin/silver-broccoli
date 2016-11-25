import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewareaComponent } from './viewarea/viewarea.component';
import { ExcelRowComponent } from './excel-row.component';
import { PokemonService } from '../pokemon/pokemon.service';
import { PokemonModule } from '../pokemon/pokemon.module';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
	imports: [ BrowserModule, FormsModule, Ng2BootstrapModule, PokemonModule ],
	declarations:	[ SidebarComponent, ViewareaComponent, ExcelRowComponent ],
	providers: [ PokemonService ],
	exports: [ ExcelRowComponent ]
})

export class WorkspaceModule { }