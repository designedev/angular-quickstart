import {Component, OnInit} from '@angular/core';

import {Hero} from '../model/hero';
import {HeroService} from "../service/hero.service";
import {Router} from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'hero-form',
	templateUrl: 'hero-form.component.html',
	styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css', 'hero-form.component.css']
})
export class HeroFormComponent implements OnInit{
	constructor(
		private heroService: HeroService,
		private router: Router
	) {}
	heroes: Hero[];
	powers = ['PowerA', 'powerB', 'PowerC', 'PowerD'];
	model = new Hero(333, "Dan Edward", this.powers[1], "NoWhere");
	submitted = false;
	active = true;

	onSubmit(): void { this.submitted = true;}

	ngOnInit(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);	// ES2015 ArrowFunction.
	}

	newHero(): void {
		this.heroService.create(this.model.name);
		this.active = false;
		setTimeout(() => this.active = true, 1000);
	}

	//TODO: remove when code complete..
	get diagnostic(): string { return JSON.stringify(this.model);}

}