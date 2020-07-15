import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import {ExperienciaService} from './services/experiencia.service';


import { APP_ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ProjectComponent } from './project/project.component';
import { DetalleComponent } from './detalle/detalle.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ExperienciaTarjetaComponent } from './experiencia-tarjeta/experiencia-tarjeta.component';
import { FooterComponent } from './footer/footer.component';

//Rutas



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProjectComponent,
    DetalleComponent,
    BuscadorComponent,
    ExperienciaTarjetaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    ExperienciaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
