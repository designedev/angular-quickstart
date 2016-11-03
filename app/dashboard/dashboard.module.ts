/**
 * Created by KAKAO on 2016. 11. 2..
 */

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DashboardComponent} from "./dashboard.component";
import {HeroSearchModule} from "../hero/herosearch/hero-search.module";

@NgModule({
    imports:    [CommonModule, HeroSearchModule],
    declarations: [DashboardComponent]
})

export class DashboardModule {}