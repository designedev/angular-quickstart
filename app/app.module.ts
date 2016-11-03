import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

//import for http request..
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeroService} from './hero/service/hero.service';

import {AppRouteModule} from './app-routing.module';

//import for HTTP API trick..
import {InMemoryWebApiModule} from 'angular-in-memory-web-api/in-memory-web-api.module'
import {InMemoryDataService} from './in-memory-data.service'

//import rxjs extensions..
import './rxjs-extensions';

// feature modules..
import {DashboardModule} from "./dashboard/dashboard.module";
import {HeroesModule} from "./hero/heroes/heroes.module";
import {HeroDetailModule} from "./hero/herodetail/hero-detail.module";
import {HeroFormModule} from "./hero/heroform/hero-form.module";
import {ModalModule} from "angular2-modal";
import {BootstrapModalModule} from "angular2-modal/plugins/bootstrap";


@NgModule({
	imports:	[
		BrowserModule,
		// feature modules..
        DashboardModule,
		HeroesModule,
		HeroDetailModule,
		HeroFormModule,
		///
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
		AppRouteModule,
		ModalModule.forRoot(),
		BootstrapModalModule
	],
	declarations: [
		AppComponent
	],
	providers: [
		HeroService
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule {}
