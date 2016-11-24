import { Pipe } from '@angular/core';

@Pipe({
	name: "search"
})

export class PokemonSearchPipe {
	transform(value, [term]) {
		return value.filter((item)=>item.name.startsWith(term));
	}
}