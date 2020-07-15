import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencia-tarjeta',
  templateUrl: './experiencia-tarjeta.component.html',
  styleUrls: ['./experiencia-tarjeta.component.css']
})
export class ExperienciaTarjetaComponent implements OnInit {

  @Input() experiencia : any = {};
  @Input() index : number;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  verExperiencia(){
    console.log(this.index);
    this.router.navigate(['detalle', this.index]);
    
    
  }

}
