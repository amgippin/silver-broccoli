import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { SingleComponent } from './single.component';
import { PokemonModule } from '../../../pokemon/pokemon.module';

@NgModule({
	imports: [ BrowserModule, FormsModule, Ng2BootstrapModule, PokemonModule],
	declarations:	[ SingleComponent ],
	exports: [ SingleComponent ]
})

export class SingleModule { }