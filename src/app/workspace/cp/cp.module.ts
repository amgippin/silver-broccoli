import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { CpComponent } from './cp.component';
import { ExcelModule } from './excel/excel.module';
import { PokemonModule } from '../../pokemon/pokemon.module';
import { SingleModule } from './single/single.module';

@NgModule({
	imports: [ BrowserModule, ExcelModule, FormsModule, Ng2BootstrapModule, PokemonModule, SingleModule],
	declarations:	[ CpComponent ],
	exports: [ CpComponent ]
})

export class CpModule { }