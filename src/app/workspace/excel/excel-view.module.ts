import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { ExcelViewComponent } from './excel-view.component';
import { ExcelRowComponent } from './excel-row.component';

import { PokemonService } from '../../pokemon/pokemon.service';
import { PokemonModule } from '../../pokemon/pokemon.module';


@NgModule({
	imports: [ BrowserModule, FormsModule, Ng2BootstrapModule, PokemonModule ],
	declarations:	[ ExcelViewComponent, ExcelRowComponent ],
	exports: [ ExcelViewComponent ]
})

export class ExcelViewModule { }