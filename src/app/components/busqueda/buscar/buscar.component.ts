import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../../services/heroes.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',

})
export class BuscarComponent implements OnInit {

hero:Heroe[] =[];
termino:string = "";

  constructor(private _activatedRoute:ActivatedRoute, private _heroesService:HeroesService, private _router:Router) { 

  }

  ngOnInit(): void {
    //alert("hola estoy en el cosntructo");
      this._activatedRoute.params.subscribe(params => {
      //console.log(params['txt']); //Recibiendo el parametro txt.
      this.hero = this._heroesService.buscarHeroe(params['txt']);
      this.termino = params['txt'];
    });
  }
  verHeroe(i:number){
    this._router.navigate(['/heroe', i]);
  }

 

}

