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
var platform_browser_1 = require('@angular/platform-browser');
//import for http request..
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var hero_service_1 = require('./hero/service/hero.service');
var app_routing_module_1 = require('./app-routing.module');
//import for HTTP API trick..
var in_memory_web_api_module_1 = require('angular-in-memory-web-api/in-memory-web-api.module');
var in_memory_data_service_1 = require('./in-memory-data.service');
//import rxjs extensions..
require('./rxjs-extensions');
// feature modules..
var dashboard_module_1 = require("./dashboard/dashboard.module");
var heroes_module_1 = require("./hero/heroes/heroes.module");
var hero_detail_module_1 = require("./hero/herodetail/hero-detail.module");
var hero_form_module_1 = require("./hero/heroform/hero-form.module");
var angular2_modal_1 = require("angular2-modal");
var bootstrap_1 = require("angular2-modal/plugins/bootstrap");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                // feature modules..
                dashboard_module_1.DashboardModule,
                heroes_module_1.HeroesModule,
                hero_detail_module_1.HeroDetailModule,
                hero_form_module_1.HeroFormModule,
                ///
                http_1.HttpModule,
                in_memory_web_api_module_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
                app_routing_module_1.AppRouteModule,
                angular2_modal_1.ModalModule.forRoot(),
                bootstrap_1.BootstrapModalModule
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            providers: [
                hero_service_1.HeroService
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map