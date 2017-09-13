
import { Component,Input } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/heroes">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `
  })

export class AppComponent {
    title = 'Tour of Heroes';


}