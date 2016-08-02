import {Component} from 'angular2/core';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { Hero } from './hero';
import { clickMeComponent } from './click-me.component';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES,clickMeComponent],
  providers:[ROUTER_PROVIDERS],
  templateUrl:'app/app.component.html'
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1,'WindowStorm'),
    new Hero(2,'Bombasto'),
    new Hero(22,'Jonas'),
    new Hero(4,'Sofia'),
  ]
  myHero = this.heroes[0];
}