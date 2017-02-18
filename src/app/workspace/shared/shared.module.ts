import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PokemonModule } from '../../pokemon/pokemon.module';

import { FitlerGenPipe, FilterSelectPipe } from './components/sidebar/sidebar.pipe';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
	imports: [ BrowserModule, FormsModule, PokemonModule],
	declarations:	[ FitlerGenPipe, FilterSelectPipe, SidebarComponent ],
	exports: [ SidebarComponent ]
})

export class SharedModule { }