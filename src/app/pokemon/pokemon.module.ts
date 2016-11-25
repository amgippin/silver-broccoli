import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PokemonService } from './pokemon.service'

@NgModule({
	imports: [ BrowserModule, FormsModule ],
	declarations:	[ ],
	providers: [ PokemonService ],
	exports: [  ]
})

export class PokemonModule { }