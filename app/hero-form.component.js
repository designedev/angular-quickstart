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
var core_1 = require('@angular/core');
var hero_1 = require('./hero');
var hero_service_1 = require('./hero.service');
var router_1 = require('@angular/router');
var HeroFormComponent = (function () {
    function HeroFormComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        this.powers = ['PowerA', 'powerB', 'PowerC', 'PowerD'];
        this.model = new hero_1.Hero(333, "Dan Edward", this.powers[1], "NoWhere");
        this.submitted = false;
        this.active = true;
    }
    HeroFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    HeroFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; }); // ES2015 ArrowFunction.
    };
    HeroFormComponent.prototype.newHero = function () {
        var _this = this;
        this.heroService.create(this.model.name);
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 1000);
    };
    Object.defineProperty(HeroFormComponent.prototype, "diagnostic", {
        //TODO: remove when code complete..
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    HeroFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hero-form',
            templateUrl: 'hero-form.component.html',
            styleUrls: ['../node_modules/bootstrap/dist/css/bootstrap.min.css', 'hero-form.component.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
    ], HeroFormComponent);
    return HeroFormComponent;
}());
exports.HeroFormComponent = HeroFormComponent;
//# sourceMappingURL=hero-form.component.js.map