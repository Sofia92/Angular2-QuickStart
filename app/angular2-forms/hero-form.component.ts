import { Component } from 'angular2/core';
import { NgForm } from 'angular2/src/common/forms';

import { Hero } from '../hero';

@Component({
	selector:'hero-form',
	templateUrl:'app/angular2-forms/hero-form.component.html'
})

export class HeroFormComponent{
  	powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
    model = new Hero(18, 'Dr IQ', this.powers[0]);
    submitted = false;
    onsubmit(){
    	this.submitted = true;
    }
    get diagnostic(){ return JSON.stringify(this.model);}
}