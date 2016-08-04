import { Component, OnInit } from 'angular2/core';
import { Hero } from './../hero';

@Component({
	selector:'click-me',
	template:`
		<div class="col-sm-8 col-sm-offset-2">
		<p>$event
			<input (keyup)="onKey($event)">
  			{{values}}
		</p>
		<p>#box
			<input #boxValue (keyup)="onKeyUp(boxValue.value)">
  			{{value}}
		</p>
		<p>keyup.enter
			<input #enterBox (keyup.enter)="onKeyUpEnter(enterBox.value)">
  			{{enterValue}}
		</p>
		<p>blur
			<input #box (keyup.enter)="blurValue=box.value" (blur)="blurValue=box.value">
  			{{blurValue}}
		</p>
		<button type="button" class="btn btn-default" (click)="onClick()">click me !</button>
		{{clickMessage}}
		<div>
			<h2>Little Tour of Heroes</h2>
			<input #newHero (keyup.enter)="add(newHero.value)" (blur)="add(newHero.value); newHero.value=''" >
			<button (click)="add(newHero.value)">Add</button>
			<ul>
				<li *ngFor="# list of heroList">{{ list }}</li>
			</ul>
		</div>
		</div>
	`
})

export class clickMeComponent {
	clickMessage = '';
	values = '';
	value = '';
	enterValue = '';
	blurValue = '';
	newHero = ''
	heroes:Hero[] =[]; 
	heroList = ['Jonas','Demi','Vantis','Sofia'];
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