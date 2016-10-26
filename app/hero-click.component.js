"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var hero_1 = require("./hero");
var HeroClickComponent = (function () {
    function HeroClickComponent() {
        this.values = '';
    }
    HeroClickComponent.prototype.onClickHero = function () {
        alert(this.hero.name);
    };
    HeroClickComponent.prototype.onKey = function (input) {
        this.values += input + "|";
    };
    HeroClickComponent.prototype.clearValue = function () {
        this.values = '';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hero_1.Hero)
    ], HeroClickComponent.prototype, "hero", void 0);
    HeroClickComponent = __decorate([
        core_1.Component({
            selector: 'hero-click',
            template: "\n        <button (click)=\"onClickHero()\">Click this Hero!</button>\n        <!--<input #stroke (keyup.enter)=\"onKey(stroke.value)\">-->\n        <input #stroke (keyup.enter)=\"values = stroke.value\" (blur)=\"values = stroke.value\">\n        <p>{{values}}</p>\n        <button *ngIf=\"values != ''\" (click)=\"clearValue()\">X</button>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], HeroClickComponent);
    return HeroClickComponent;
}());
exports.HeroClickComponent = HeroClickComponent;
//# sourceMappingURL=hero-click.component.js.map