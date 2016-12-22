import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { SearchFilterPipe } from './search.pipe';
import { SingleComponent } from './single.component';
import { PokemonModule } from '../../../pokemon/pokemon.module';

@NgModule({
	imports: [ BrowserModule, FormsModule, Ng2BootstrapModule, PokemonModule],
	declarations:	[ SearchFilterPipe, SingleComponent ],
	exports: [ SingleComponent ]
})

export class SingleModule { }