import { Injectable } from '@angular/core';
import { Hero } from './models/hero-model';
import { HEROES } from './mock-heroes';


@Injectable()
export class HeroService {

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
      }

}