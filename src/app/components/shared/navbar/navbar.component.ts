import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../../services/heroes.service';
import { Router, RouterEvent } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  heroe:any[] = []; //Arreglo para guardar los hereoes coincidentes...



  constructor(private _heroesService:HeroesService,
    private _router:Router) { }

  ngOnInit(): void {
  }


  buscarHeroe(buscartexto:string){
    console.log(buscartexto);
    this.heroe.push(this._heroesService.buscarHeroe(buscartexto));
    this._router.navigate(['/resultados', buscartexto]);
  }

  llamarboton(){
    let btn = document.getElementById("btnbuscar");
    btn?.click;
  }

  

}
