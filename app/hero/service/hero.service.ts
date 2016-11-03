import {Injectable} from '@angular/core';

import {Hero} from './hero/hero';
//import {HEROES} from './mock-heroes';

import 'rxjs/add/operator/toPromise';
import {Headers, Http} from '@angular/http';

@Injectable()
export class HeroService {

	private heroesUrl = 'app/heroes';	// web API`s URL..
	private testUrl = 'http://local.kakao.com:2000/api/home'
	private headers = new Headers({'Content-Type': 'application/json'});


	private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
	}

	constructor(private http: Http) { }

	getHome(): Promise<string>{
		return this.http.get(this.testUrl).toPromise().then(response => response.json().data).catch(this.handleError);
	}

	getHeroes(): Promise<Hero[]>{
		//return Promise.resolve(HEROES);
		return this.http.get(this.heroesUrl).toPromise().then(response => response.json().data as Hero[]).catch(this.handleError);
	}
	getHeroesSlowly(): Promise<Hero[]> {
		return new Promise<Hero[]>(resolve =>
    	setTimeout(resolve, 2000)) // delay 2 seconds
    	.then(() => this.getHeroes());
	}
	getHero(id: number): Promise<Hero>{
		return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
	}
	update(hero: Hero): Promise<Hero> {
		const url = `${this.heroesUrl}/${hero.id}`;
		return this.http.put(url, JSON.stringify(hero), {headers: this.headers}).toPromise().then(() => hero).catch(this.handleError);
	}
	create(name: string): Promise<Hero> {
		return this.http.post(this.heroesUrl, JSON.stringify({name: name}),{headers: this.headers}).toPromise().then(response => response.json().data).catch(this.handleError);
	}
	delete(id: number): Promise<void> {
		const url = `${this.heroesUrl}/${id}`;
		return this.http.delete(url, {headers: this.headers}).toPromise().then(() => null).catch(this.handleError);
	}

}