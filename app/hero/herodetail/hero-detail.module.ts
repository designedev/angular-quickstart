/**
 * Created by KAKAO on 2016. 11. 2..
 */

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HeroDetailComponent} from "./hero-detail.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [HeroDetailComponent],
    exports: [HeroDetailComponent]
})

export class HeroDetailModule{}