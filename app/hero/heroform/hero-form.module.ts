/**
 * Created by KAKAO on 2016. 11. 2..
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HeroFormComponent} from "./hero-form.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [HeroFormComponent]
})
export class HeroFormModule{}