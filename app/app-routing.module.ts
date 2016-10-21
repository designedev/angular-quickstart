import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard.component';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {Heroes2Component} from "./heroes2.component";
import {AddHeroComponent} from "./add-hero.component";

const routes: Routes = [
	{path: '',redirectTo: '/dashboard',pathMatch: 'full'},
	{path: 'heroes',component: HeroesComponent	},
	{path: 'dashboard',component: DashboardComponent},
	{path: 'detail/:id',component: HeroDetailComponent},
	{path: 'heroes2', component: Heroes2Component },
	{path: 'create', component: AddHeroComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRouteModule{}