
import { Component,Input } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: `
    <h1>{{title}}</h1>
    <my-heroes></my-heroes>
  `
  })

export class AppComponent {
    title = 'Tour of Heroes';


}