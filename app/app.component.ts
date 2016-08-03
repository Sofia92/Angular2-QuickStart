import { Component, OnInit } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { Hero } from './hero';
import { HeroService } from './angular2-service/hero.service';
import { clickMeComponent } from './angular2-input/click-me.component';
import { HeroFormComponent } from './angular2-forms/hero-form.component';

@Component({
    selector: 'my-app',
    template: `
  <h1>{{title}}</h1>
  <nav>
    <a [routerLink]="['Input']">Input</a>
    <a [routerLink]="['Forms']">Forms</a>
  </nav>
  <p>Heroes:</p>
    <ul>
      <li *ngFor="# hero of heroes">
        {{ hero.name }}
      </li>
    </ul>
  <p>
  <router-outlet></router-outlet>
`,
  // styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES,clickMeComponent,HeroFormComponent],
  providers: [ROUTER_PROVIDERS,HeroService]
})

@RouteConfig([
  {
    path: '/Input',
    name: 'Input',
    component: clickMeComponent
  },
  {
    path: '/Forms',
    name: 'Forms',
    component: HeroFormComponent
  }
])

export class AppComponent implements OnInit{
  title = 'Tour of angular2';
  heroes:Hero[] =[];
  constructor(private heroService:HeroService){ }
  ngOnInit(){
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);

  }
}