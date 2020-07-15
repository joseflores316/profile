import { Component, OnInit } from '@angular/core';
import {ExperienciaService, Experiencia} from '../services/experiencia.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-experiiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencias: Experiencia [] = [];

  constructor(private _experienciaService : ExperienciaService, private router : Router) { }

  ngOnInit(): void {
    this.experiencias = this._experienciaService.getExperiencia();
    
  }

  verExperiencia(id : number){
    this.router.navigate(['detalle', id]);
    
  }

  buscarTecnologia(termino : string) {
    this.router.navigate(['/buscar', termino]);

  }



}
