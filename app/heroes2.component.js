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
var router_1 = require('@angular/router');
var hero_service_1 = require('./hero.service');
var Heroes2Component = (function () {
    //heroService = new HeroService(); -- bad idea. use constructor
    function Heroes2Component(router, heroservice) {
        this.router = router;
        this.heroservice = heroservice;
    }
    Heroes2Component.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    Heroes2Component.prototype.getHeroes = function () {
        var _this = this;
        //this.heroes = this.heroservice.getHeroes();
        this.heroservice.getHeroes().then(function (heroes) { return _this.heroes = heroes.slice(0, 5); }); // ES2015 ArrowFunction.
    };
    Heroes2Component.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    Heroes2Component.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    Heroes2Component.prototype.add = function (name) {
        var _this = this;
        this.heroservice.create(name).then(function (hero) { _this.heroes.push(hero); _this.selectedHero = null; });
    };
    Heroes2Component.prototype.delete = function (hero) {
        var _this = this;
        this.heroservice.delete(hero.id).then(function () {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        });
    };
    Heroes2Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-heroes',
            templateUrl: 'heroes2.component.html',
            styleUrls: ['heroes2.component.css'],
            providers: [hero_service_1.HeroService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
    ], Heroes2Component);
    return Heroes2Component;
}());
exports.Heroes2Component = Heroes2Component;
//# sourceMappingURL=heroes2.component.js.map