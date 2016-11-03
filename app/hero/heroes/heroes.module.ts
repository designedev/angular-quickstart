/**
 * Created by KAKAO on 2016. 11. 2..
 */

import {NgModule} from "@angular/core";
import {HeroesComponent} from "./heroes.component";
import {CommonModule} from "@angular/common";
import {ToasterModule, ToasterService} from 'angular2-toaster/angular2-toaster'
import {HeroService} from "../service/hero.service";
@NgModule({
    imports: [
        CommonModule,
        ToasterModule
    ],
    declarations: [HeroesComponent],
    providers: [HeroService, ToasterService]
})
export class HeroesModule{}