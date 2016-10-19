import {Component} from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
	<h2> My Heroes </h2>
	<ul class="heroes">
		<li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
			<!-- heroes will place here.. -->
			<span class="badge">{{hero.id}}</span>{{hero.name}}
		</li>
	</ul>
	<div *ngIf="selectedHero">
		<h2> Hero Details </h2>
		<div>
			<label> id: </label>{{selectedHero.id}}
		</div>
		<div>
			<input [(ngModel)] = "selectedHero.name" placeholder= "name"/>
		</div>
	</div>
	`,
	styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})

export class AppComponent {
	heroes = HEROES;
	selectedHero: Hero;

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
}

const HEROES: Hero[] = [
		{id: 1, name: "김영웅"},
		{id: 2, name: "박크립"},
		{id: 3, name: "김타워"},
		{id: 4, name: "최보스"},
		{id: 5, name: "김빌런"},
		{id: 6, name: "박휴먼"},
		{id: 7, name: "이나엘"},
		{id: 8, name: "홍오크"},
		{id: 9, name: "박드레나이"},
		{id: 10, name: "김다엘"}
	];

	
export class Hero {
	id: number;
	name: string;
}