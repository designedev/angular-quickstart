import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard.component';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

import {AppRouteModule} from './app-routing.module';

@NgModule({
	imports:	[
		BrowserModule, 
		FormsModule,
		AppRouteModule
	],
	declarations: [
		AppComponent,
		HeroesComponent,
		DashboardComponent,
		HeroDetailComponent
	],
	providers: [
		HeroService
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule {}
