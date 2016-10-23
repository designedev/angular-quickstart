import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard.component';
import {HeroesComponent} from './heroes.component';
import {HeroFormComponent} from './hero-form.component';
import {HeroDetailComponent} from './hero-detail.component';

const routes: Routes = [
	{path: '',redirectTo: '/dashboard',pathMatch: 'full'},
	{path: 'heroes',component: HeroesComponent	},
	{path: 'dashboard',component: DashboardComponent},
	{path: 'detail/:id',component: HeroDetailComponent},
	{path: 'heroForm', component: HeroFormComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRouteModule{}