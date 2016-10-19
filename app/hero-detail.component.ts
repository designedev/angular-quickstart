import {Component, Input} from '@angular/core';
import {Hero} from './hero';

@Component ({
	selector: 'my-hero-detail',
	template: `
	<div *ngIf="hero">
		<h2> Hero Details </h2>
		<div>
			<label> id: </label>{{hero.id}}
		</div>
		<div>
			<label>HP: </label>{{hero.hp}}
		</div>
		<div>
			<input [(ngModel)] = "hero.name" placeholder= "name"/>
		</div>
	</div>
	`
})

export class HeroDetailComponent {
	@Input()
	hero: Hero;
}