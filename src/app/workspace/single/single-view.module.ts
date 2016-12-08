import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { ExcelViewModule } from '../excel/excel-view.module';
import { PokemonModule } from '../../pokemon/pokemon.module';

import { SingleViewComponent } from './single-view.component';

@NgModule({
	imports: [ BrowserModule, FormsModule, Ng2BootstrapModule, ExcelViewModule, PokemonModule ],
	declarations:	[ SingleViewComponent ],
	exports: [ SingleViewComponent ]
})

export class SingleViewModule { }