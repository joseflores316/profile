import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  mostrar:boolean = false;

  mainSaints : string[] = ['Shun', 'Ikki', 'Shiryū' ,'Hyōga'];


}
