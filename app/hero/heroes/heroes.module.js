/**
 * Created by KAKAO on 2016. 11. 2..
 */
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
var heroes_component_1 = require("./heroes.component");
var common_1 = require("@angular/common");
var angular2_toaster_1 = require('angular2-toaster/angular2-toaster');
var hero_service_1 = require("../service/hero.service");
var HeroesModule = (function () {
    function HeroesModule() {
    }
    HeroesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                angular2_toaster_1.ToasterModule
            ],
            declarations: [heroes_component_1.HeroesComponent],
            providers: [hero_service_1.HeroService, angular2_toaster_1.ToasterService]
        }), 
        __metadata('design:paramtypes', [])
    ], HeroesModule);
    return HeroesModule;
}());
exports.HeroesModule = HeroesModule;
//# sourceMappingURL=heroes.module.js.map