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
var hero_service_1 = require("../service/hero.service");
var angular2_toaster_1 = require('angular2-toaster/angular2-toaster');
var HeroesComponent = (function () {
    //heroService = new HeroService(); -- bad idea. use constructor 
    function HeroesComponent(router, heroservice, toasterservice, route) {
        this.router = router;
        this.heroservice = heroservice;
        this.toasterservice = toasterservice;
        this.route = route;
        this.toasterconfig = new angular2_toaster_1.ToasterConfig({
            showCloseButton: true,
            tapToDismiss: true,
            limit: 3,
            timeout: 30000,
            positionClass: 'toast-bottom-center'
        });
    }
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
        this.toasterservice.pop('success', hero.name, hero.name + " selected.");
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        //this.heroes = this.heroservice.getHeroes();
        this.heroservice.getHeroes().then(function (heroes) { return _this.heroes = heroes; }); // ES2015 ArrowFunction.
    };
    HeroesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getHeroes();
        this.route.params.forEach(function (params) {
            var selectedId = +params['selectedId'];
            _this.selectedId = selectedId;
        });
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    HeroesComponent.prototype.add = function (name) {
        var _this = this;
        this.heroservice.create(name).then(function (hero) { _this.heroes.push(hero); _this.selectedHero = null; });
    };
    HeroesComponent.prototype.delete = function (hero) {
        var _this = this;
        this.heroservice.delete(hero.id).then(function () {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        });
    };
    HeroesComponent.prototype.isSelected = function (hero) {
        return hero.id === this.selectedId;
    };
    HeroesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-heroes',
            templateUrl: 'heroes.component.html',
            styleUrls: ['../../../node_modules/angular2-toaster/lib/toaster.css', 'heroes.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService, angular2_toaster_1.ToasterService, router_1.ActivatedRoute])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map