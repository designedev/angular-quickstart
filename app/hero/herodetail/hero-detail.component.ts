import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Hero} from '../model/hero';
import {HeroService} from "../service/hero.service";

@Component ({
	moduleId: module.id,
	selector: 'my-hero-detail',
	templateUrl: 'hero-detail.component.html',
	styleUrls: ['hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
	@Input()
	hero: Hero;

	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute,
		private router: Router,
		private location: Location
	){} 

	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			let id = +params['id'];
			this.heroService.getHero(id).then(hero => this.hero = hero);
		});
	}
	save(): void {
		this.heroService.update(this.hero).then(() => this.goBack());
	}
	goBack(): void {
		console.log(this.location.path());
		//this.location.back({ selectedId: this.hero.id });
		this.router.navigate(['/heroes', { selectedId: this.hero.id }]);
	}
}