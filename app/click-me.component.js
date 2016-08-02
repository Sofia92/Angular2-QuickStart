System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var clickMeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            clickMeComponent = (function () {
                function clickMeComponent() {
                    this.clickMessage = '';
                    this.values = '';
                    this.value = '';
                    this.enterValue = '';
                    this.blurValue = '';
                    this.newHero = '';
                    this.heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
                }
                clickMeComponent.prototype.onClick = function () {
                    this.clickMessage = '你好！';
                };
                clickMeComponent.prototype.onKey = function (event) {
                    this.values += event.target.value + ' | ';
                };
                clickMeComponent.prototype.onKeyUp = function (value) {
                    this.value += value + '|';
                };
                clickMeComponent.prototype.onKeyUpEnter = function (value) {
                    this.enterValue += value + '|';
                };
                clickMeComponent.prototype.onKeyUpBlur = function (value) {
                    this.blurValue += value + '|';
                };
                clickMeComponent.prototype.add = function (newHero) {
                    if (newHero) {
                        this.heroes.push(newHero);
                    }
                };
                clickMeComponent = __decorate([
                    core_1.Component({
                        selector: 'click-me',
                        template: "\n\t\t<button type=\"button\" class=\"btn btn-default\" (click)=\"onClick()\">click me !</button>\n\t\t{{clickMessage}}\n\t\t<p>\n\t\t\t$event\n\t\t\t<input (keyup)=\"onKey($event)\">\n  \t\t\t{{values}}\n\t\t</p>\n\t\t<p>\n\t\t\t#box\n\t\t\t<input #box (keyup)=\"onKeyUp(box.value)\">\n  \t\t\t{{value}}\n\t\t</p>\n\t\t<p>\n\t\t\tkeyup.enter\n\t\t\t<input #box (keyup.enter)=\"onKeyUpEnter(box.value)\">\n  \t\t\t{{enterValue}}\n\t\t</p>\n\t\t<p>\n\t\t\tblur\n\t\t\t<input #box (keyup.enter)=\"blurValue=box.value\" (blur)=\"blurValue=box.value\">\n  \t\t\t{{blurValue}}\n\t\t</p>\n\t\t<div>\n\t\t\t<h2>Little Tour of Heroes</h2>\n\t\t\t<input #newHero (keyup.enter)=\"add(newHero.value)\" (blur)=\"add(newHero.value); newHero.value=''\" >\n\t\t\t<button (click)=\"add(newHero.value)\">Add</button>\n\t\t\t<ul>\n\t\t\t\t<li *ngFor=\"# hero of heroes\">{{ hero }}</li>\n\t\t\t</ul>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], clickMeComponent);
                return clickMeComponent;
            }());
            exports_1("clickMeComponent", clickMeComponent);
        }
    }
});
//# sourceMappingURL=click-me.component.js.map