import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {Router} from '@angular/router';
import {HeroService} from '../hero.service';

@Component({
	moduleId: module.id,
	selector: 'my-heroes',
	templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
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
		this.heroservice.getHeroes().then(heroes => this.heroes = heroes);	// ES2015 ArrowFunction.
	}
	ngOnInit(): void {
		this.getHeroes();
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
}
