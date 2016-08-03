import { Component, OnInit } from 'angular2/core';
import { Hero } from './../hero';
import { HeroService } from './../angular2-service/hero.service';

@Component({
	selector:'click-me',
  	providers: [HeroService],
	template:`
		<div>
			$event
			<input (keyup)="onKey($event)">
  			{{values}}
			#box
			<input #boxValue (keyup)="onKeyUp(boxValue.value)">
  			{{value}}
			keyup.enter
			<input #enterBox (keyup.enter)="onKeyUpEnter(enterBox.value)">
  			{{enterValue}}
			blur
			<input #box (keyup.enter)="blurValue=box.value" (blur)="blurValue=box.value">
  			{{blurValue}}
		<button type="button" class="btn btn-default" (click)="onClick()">click me !</button>
		{{clickMessage}}
		</div>
		<div>
			<h2>Little Tour of Heroes</h2>
			<input #newHero (keyup.enter)="add(newHero.value)" (blur)="add(newHero.value); newHero.value=''" >
			<button (click)="add(newHero.value)">Add</button>
			<ul>
				<li *ngFor="# hero of heroList">{{ hero }}</li>
			</ul>
		</div>
	`
})

export class clickMeComponent implements OnInit{
	clickMessage = '';
	values = '';
	value = '';
	enterValue = '';
	blurValue = '';
	newHero = ''
	heroes:Hero[] =[]; 
	heroList = [];
	constructor(private heroService:HeroService){ }
	ngOnInit(){
	    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	};

	onClick() {
		this.clickMessage = '你好！';
	}

	onKey(event:any) {
    	this.values += event.target.value + ' | ';
  	}

  	onKeyUp(value:string){
  		this.value += value + '|';
  	}

  	onKeyUpEnter(value:string){
  		this.enterValue += value + '|';
  	}

  	onKeyUpBlur(value:string){
  		this.blurValue += value + '|';
  	}
  	add(newHero:string){
  		if(newHero){
  			this.heroList.push(newHero);
  		}
  	}

}