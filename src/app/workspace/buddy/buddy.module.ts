import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { BuddyComponent } from './buddy.component';
import { FitlerGenPipe } from './buddy.pipe';
import { PokemonModule } from '../../pokemon/pokemon.module';

@NgModule({
	imports: [ BrowserModule, FormsModule, Ng2BootstrapModule, PokemonModule],
	declarations:	[ BuddyComponent, FitlerGenPipe ],
	exports: [ BuddyComponent ]
})

export class BuddyModule { }