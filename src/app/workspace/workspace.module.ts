import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { BuddyModule } from './buddy/buddy.module';
import { CpModule } from './cp/cp.module';
import { PokemonModule } from '../pokemon/pokemon.module';
import { WorkspaceComponent } from './workspace.component';

@NgModule({
	imports: [ BrowserModule, BuddyModule, CpModule, FormsModule, Ng2BootstrapModule, PokemonModule],
	declarations:	[ WorkspaceComponent ],
	exports: [ WorkspaceComponent ]
})

export class WorkspaceModule { }