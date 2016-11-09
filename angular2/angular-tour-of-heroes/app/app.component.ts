import { Component } from '@angular/core';

export class Hero {
	id: number;
	name: string;
}

@Component({
	selector: 'my-app',
	/*First time in my life I used a back tick...*/
	template: `
		<h1>{{title}}</h1>
		<h2>{{hero.name}} details!</h2>
		
		<label>id: </label>{{hero.id}}
		<div>		
			<!--Two way binding-->
			Two way binding
			<input [(ngModel)]="hero.name" placeholder="name">
		</div>
		<div>
			<!--One way binding-->
			One way binding
			<input value="{{hero.name}}" placeholder="name">
		</div>
	`
});

/*Why is this one equal and the others colon?*/
export class AppComponent { 
	title = 'Tour of Heroes';
	hero: Hero = {
		id: 1,
		name: 'Windstorm'
	};
}






