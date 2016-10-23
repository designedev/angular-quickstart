import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

//import for http request..
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard.component';
import {HeroesComponent} from './heroes.component';
import {HeroFormComponent} from './hero-form.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroSearchComponent} from './hero-search.component';
import {HeroService} from './hero.service';

import {AppRouteModule} from './app-routing.module';

//import for HTTP API trick..
import {InMemoryWebApiModule} from 'angular-in-memory-web-api/in-memory-web-api.module'
import {InMemoryDataService} from './in-memory-data.service'

//import rxjs extensions..
import './rxjs-extensions';

@NgModule({
	imports:	[
		BrowserModule, 
		FormsModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
		AppRouteModule
	],
	declarations: [
		AppComponent,
		HeroesComponent,
		DashboardComponent,
		HeroFormComponent,
		HeroDetailComponent,
		HeroSearchComponent
	],
	providers: [
		HeroService
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule {}
