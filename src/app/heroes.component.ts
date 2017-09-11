import { Component, OnInit } from '@angular/core';
import { Hero } from './models/hero-model';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';



@Component({
  selector: 'my-heroes',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>{{title}}</h1>
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes"
      [class.selected]="hero === selectedHero"
      (click)="onSelect(hero)">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>
  <hero-detail [hero]="selectedHero"></hero-detail>
`
})

export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}



