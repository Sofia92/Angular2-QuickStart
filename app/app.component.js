System.register(['angular2/core', 'angular2/router', './angular2-service/hero.service', './angular2-input/click-me.component', './angular2-forms/hero-form.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, hero_service_1, click_me_component_1, hero_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (click_me_component_1_1) {
                click_me_component_1 = click_me_component_1_1;
            },
            function (hero_form_component_1_1) {
                hero_form_component_1 = hero_form_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(heroService) {
                    this.heroService = heroService;
                    this.title = 'Tour of angular2';
                    this.heroes = [];
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n  <h1>{{title}}</h1>\n  <nav>\n    <a [routerLink]=\"['Input']\">Input</a>\n    <a [routerLink]=\"['Forms']\">Forms</a>\n  </nav>\n  <p>Heroes:</p>\n    <ul>\n      <li *ngFor=\"# hero of heroes\">\n        {{ hero.name }}\n      </li>\n    </ul>\n  <p>\n  <router-outlet></router-outlet>\n",
                        // styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, click_me_component_1.clickMeComponent, hero_form_component_1.HeroFormComponent],
                        providers: [router_1.ROUTER_PROVIDERS, hero_service_1.HeroService]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/Input',
                            name: 'Input',
                            component: click_me_component_1.clickMeComponent
                        },
                        {
                            path: '/Forms',
                            name: 'Forms',
                            component: hero_form_component_1.HeroFormComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map