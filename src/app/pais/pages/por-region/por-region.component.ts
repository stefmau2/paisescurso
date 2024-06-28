import { Component,  } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisInputComponent } from '../../components/pais-input/pais-input.component';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
`button {
  margin-right:15px;
}`
  ]
})
export class PorRegionComponent  {

  regiones: string[] =[ 'africa', 'americas', 'asia', 'europe', 'oceania']
  regionActiva: string = '';
  paises : Country[] = [];

  constructor(private PaisService : PaisService) { }


getClaseCCS (region : string){
  return (region === this.regionActiva)
  ? 'btn btn-primary'
  :'btn btn-outline-primary'
}

activarRegion( region : string){

  if(region === this.regionActiva) {return; }
  this.regionActiva = region;
  this.paises = [];

  this.PaisService.buscarRegion(region)
  .subscribe(paises =>
  {
    console.log(paises);
    this.paises = paises;
 
  });
}

}
