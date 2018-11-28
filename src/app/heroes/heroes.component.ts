import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero
  constructor(private heroService: HeroService) { 

  }
  ngOnInit() {
    console.log('生命钩子函数-ngOnInit')
    this.getHeroes()
  }
  getHeroes(): void {
    // heroService已经注入的root，所以可以通过this.调用
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
