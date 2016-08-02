import { Component } from 'angular2/core';

@Component({
	selector:'click-me',
	template:`
		<button type="button" class="btn btn-default" (click)="onClick()">click me !</button>
		{{clickMessage}}
		<p>
			$event
			<input (keyup)="onKey($event)">
  			{{values}}
		</p>
		<p>
			#box
			<input #box (keyup)="onKeyUp(box.value)">
  			{{value}}
		</p>
		<p>
			keyup.enter
			<input #box (keyup.enter)="onKeyUpEnter(box.value)">
  			{{enterValue}}
		</p>
		<p>
			blur
			<input #box (keyup.enter)="blurValue=box.value" (blur)="blurValue=box.value">
  			{{blurValue}}
		</p>
		<div>
			<h2>Little Tour of Heroes</h2>
			<input #newHero (keyup.enter)="add(newHero.value)" (blur)="add(newHero.value); newHero.value=''" >
			<button (click)="add(newHero.value)">Add</button>
			<ul>
				<li *ngFor="# hero of heroes">{{ hero }}</li>
			</ul>
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
	heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

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
  			this.heroes.push(newHero);
  		}
  	}

}