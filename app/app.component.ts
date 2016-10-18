import {Component} from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
	<h1>{{title}}</h1>
	<h2>{{hero.name}} Details below..</h2>
	<div>
		<label>id : </label>
		<input value="{{hero.name}}" placeholder="name">
		<input [(ngModel)]="hero.name" placeholder="name">
	</div>
	<div><label>name : </label>{{hero.name}}</div>
	`
})

export class AppComponent {
	//additional code from TUTORIAL2. The Hero Editor.
	title = "Tour of Heroes";
	hero = {
		id: 1,
		name: "Geralt Of Rivia"
	};
}

export class Hero {
	id: number;
	name: string;
}