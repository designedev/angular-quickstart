

import {Input, Component} from "@angular/core";
import {Hero} from "./hero";

@Component({
    selector: 'hero-click',
    template: `
        <button (click)="onClickHero()">Click this Hero!</button>
        <!--<input #stroke (keyup.enter)="onKey(stroke.value)">-->
        <input #stroke (keyup.enter)="values = stroke.value" (blur)="values = stroke.value">
        <p>{{values}}</p>
        <button *ngIf="values != ''" (click)="clearValue()">X</button>
    `
})
export class HeroClickComponent {
    @Input()
    hero: Hero;

    values: string = '';

    onClickHero(): void{
        alert(this.hero.name);
    }

    onKey(input: string) {
        this.values += input + "|";
    }

    clearValue(): void{
        this.values = '';
    }
}
