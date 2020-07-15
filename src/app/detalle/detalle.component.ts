import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExperienciaService } from '../services/experiencia.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  detalle : any = {};


  constructor(private activatedrouter : ActivatedRoute, private _experienciaService : ExperienciaService) {
    this.activatedrouter.params.subscribe( params => {
      console.log(params);
      this.detalle = this._experienciaService.getDetalle(params['id']);
      console.log(this.detalle);
      
      
    })


   }

  ngOnInit(): void {
  }

}
