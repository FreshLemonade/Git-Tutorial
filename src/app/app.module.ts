import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { HeroesComponent }     from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';

import { AppRoutingModule }     from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})




export class AppModule { }
