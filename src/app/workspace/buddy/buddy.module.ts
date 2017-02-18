import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { BuddyComponent } from './buddy.component';
import { PokemonModule } from '../../pokemon/pokemon.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [ BrowserModule, FormsModule, Ng2BootstrapModule, PokemonModule, SharedModule ],
	declarations:	[ BuddyComponent ],
	exports: [ BuddyComponent ]
})

export class BuddyModule { }
