import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe} from '../../services/heroes.service';
import { Router } from "@angular/router";
import { Store, Action } from '@ngrx/store';

export interface AppState {
  heroes: Heroe[]
}

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',

})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];


  constructor( private _heroesService:HeroesService, private _router:Router, private store: Store ) {
    this.dispatchActions();
    this.subscriptions();
  }

  private dispatchActions(): void {
    const action: Action = {
      type: "GET_HEROES"
    }
    this.store.dispatch(action);
  }

  private subscriptions(): void {
    this.store.subscribe(state => {
      console.log("State: ", state)
    })
  }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    console.log
    
  }


  verHeroe(i:number){
    this._router.navigate(['/heroe', i]);
  }

}




