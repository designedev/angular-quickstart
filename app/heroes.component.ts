import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {Router} from '@angular/router';
import {HeroService} from './hero.service';

@Component({
	selector: 'my-heroes',
	templateUrl: './templates/heroes.component.html',
  styleUrls: ['./templates/heroes.component.css']
  ,
providers: [HeroService]
})

export class HeroesComponent implements OnInit{
	heroes: Hero[];
	selectedHero: Hero;
	//heroService = new HeroService(); -- bad idea. use constructor 
	constructor(private router: Router, private heroservice: HeroService){}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
	getHeroes(): void {
		//this.heroes = this.heroservice.getHeroes();
		this.heroservice.getHeroesSlowly().then(heroes => this.heroes = heroes);	// ES2015 ArrowFunction.
	}
	ngOnInit(): void {
		this.getHeroes();
	}
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
