import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country ;
  traducciones : string[] = [];

  constructor( private activatedRoute : ActivatedRoute,
    private PaisService : PaisService) { }

  ngOnInit( ): void {

    this.activatedRoute.params
        .pipe(
          switchMap ( ({id}) => this.PaisService.getPaisPorAlpha(id) ),
          tap(resp => console.log(resp))
        )
        .subscribe((pais) => {
          this.pais= pais[0];
          this.traducciones = Object.keys(this.pais.translations)
        })
     

        }
      }
