/**
 * Created by KAKAO on 2016. 11. 2..
 */

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HeroSearchComponent} from "./hero-search.component";
import {HeroSearchService} from "./hero-search.service";

@NgModule ({
    imports: [CommonModule],
    declarations: [HeroSearchComponent],
    providers: [HeroSearchService],
    exports: [HeroSearchComponent]
})
export class HeroSearchModule{}