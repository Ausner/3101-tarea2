import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; //Para recibir un parametro por URL
import { HeroesService, Heroe } from '../../services/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent  {


  heroe:any = {};

  ruta:string = "";



  constructor(private _activatedRoute:ActivatedRoute, private _heroesService:HeroesService) {

    this._activatedRoute.params.subscribe(params => {
      //console.log(params['id']); //Recibiendo el parametro ID.
      this.heroe = this._heroesService.getHeroe(params['id']);
      //console.log(this.heroe);
      this.ObtenerMarca();
    });

   }


   ObtenerMarca(){
     if(this.heroe.casa == "DC"){
       this.ruta = "assets/img/DC.png";
     }else{
       this.ruta = "assets/img/Marvel.png";
     }
   }


  

}
