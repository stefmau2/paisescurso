import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [ `
  li {
    cursor:pointer;
  }
  `
  ]
})
export class PorPaisComponent {
termino: string ='Hola Mundo';
hayError: boolean = false;
paises : Country[] = [];
paisesSugeridos : Country[] = [];


 

constructor(private PaisService: PaisService  ){}

buscar(termino:string){
  this.hayError =false;
  this.termino = termino;

  this.PaisService.buscarPais(termino)
  .subscribe( paises => {
    console.log(paises);
    this.paises = paises;
  }, (err) => {
    this.hayError = true;
    this.paises = [];
  });
}

sugerencias( termino : string) {
this.hayError = false;

this.PaisService.buscarPais(termino)
.subscribe(paises => this.paisesSugeridos = paises.splice(0,5),
(err) => 
this.paisesSugeridos =[]);
}
}