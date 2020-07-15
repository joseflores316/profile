import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaService } from '../services/experiencia.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  experiencias: any [] = [];

  constructor( private activatedRoute: ActivatedRoute, private _experienciaService : ExperienciaService,private router : Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      console.log(params['termino']);
      this.experiencias = this._experienciaService.filterExperienccias(params['termino']);
      console.log(this.experiencias);
      
      
    })


  }

  verExperiencia(id : number){
    this.router.navigate(['detalle', id]);
    
  }

  buscarTecnologia(termino : string) {
    this.router.navigate(['/buscar', termino]);

  }

}
