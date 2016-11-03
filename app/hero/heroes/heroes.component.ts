import {Component, OnInit} from '@angular/core';
import {Hero} from '../model/hero';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {HeroService} from "../service/hero.service";
import {ToasterService, ToasterConfig} from 'angular2-toaster/angular2-toaster';

@Component({
	moduleId: module.id,
	selector: 'my-heroes',
	templateUrl: 'heroes.component.html',
  	styleUrls: ['../../../node_modules/angular2-toaster/lib/toaster.css', 'heroes.component.css']
})

export class HeroesComponent implements OnInit{
	selectedId: number;
	heroes: Hero[];
	selectedHero: Hero;

	toasterconfig : ToasterConfig = new ToasterConfig({
		showCloseButton: true,
		tapToDismiss: true,
		limit: 3,
		timeout: 30000,
		positionClass: 'toast-bottom-center'
	})
	//heroService = new HeroService(); -- bad idea. use constructor 
	constructor(private router: Router, private heroservice: HeroService, private toasterservice: ToasterService, private route: ActivatedRoute){}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
		this.toasterservice.pop('success', hero.name, hero.name + " selected.");

	}
	getHeroes(): void {
		//this.heroes = this.heroservice.getHeroes();
		this.heroservice.getHeroes().then(heroes => this.heroes = heroes);	// ES2015 ArrowFunction.
	}
	ngOnInit(): void {
		this.getHeroes();
		this.route.params.forEach((params: Params) => {
			let selectedId = +params['selectedId'];
			this.selectedId = selectedId;
		});
	}
  	gotoDetail(): void {
    	this.router.navigate(['/detail', this.selectedHero.id]);
  	}
  	add(name: string): void {
  		this.heroservice.create(name).then(hero => {this.heroes.push(hero); this.selectedHero = null;})
  	}
  	delete(hero: Hero): void {
  		this.heroservice.delete(hero.id).then(() => {
  			this.heroes = this.heroes.filter(h => h !== hero);
  			if (this.selectedHero === hero) {this.selectedHero = null;}
  		});
  	}
  	isSelected(hero: Hero): boolean {
		return hero.id === this.selectedId;
	}
}
