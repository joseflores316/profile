import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LandingComponent } from './landing/landing.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ProjectComponent } from './project/project.component';
import { EducacionComponent } from './educacion/educacion.component';
import { DetalleComponent } from './detalle/detalle.component';
import { BuscadorComponent } from './buscador/buscador.component';


const APP_ROUTES: Routes = [
  {path : 'home' , component : LandingComponent},
  {path : 'educacion' , component : EducacionComponent},
  {path : 'detalle/:id' , component : DetalleComponent},
  {path : 'experiencia' , component : ExperienciaComponent},
  {path : 'projects' , component : ProjectComponent},
  {path : 'buscar/:termino' , component : BuscadorComponent},
  {path : '**', pathMatch: 'full', redirectTo : 'home'}
];

export const APP_ROUTING =  RouterModule.forRoot(APP_ROUTES, {useHash: true});
