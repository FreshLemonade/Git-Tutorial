import { Component } from '@angular/core';
import { Hero } from './models/hero-model';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: '<h1>{{title}}</h1><h2> {{hero.name}} details!</h2>'
})

export class AppComponent {
title = 'Tour of Heroes';
hero: Hero = {
  id: 1, 
  name: 'Windstorm'  
  };
}
