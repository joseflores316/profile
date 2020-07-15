import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private experiencias : Experiencia [] =[

    {
      empresa : "Asus",
      cargo: "Senior Software Development Engineer",
      breveDescripcion : "Desarrollo de nuevas funcionalidades y corrección de errores de la intranet",
      img : "assets/img/asus.png",
      tecnologiasUsadas : "Java 8, JEE, JSP, MySQL, Git, Maven, Intellij, Struts 2. Spring (MVC), Spring Data, Thymeleaf, JPA, Hibernate, Jquery, Bootstrap, Javascript, Ajax, HTML5, CSS."
    },
    {
      empresa : "Sopra Steria",
      cargo: "Senior Software",
      breveDescripcion : "Desarrollo de nuevas funcionalidades y corrección de errores de la intranet",
      img : "assets/img/sopra.png",
      tecnologiasUsadas : "Java 8, JEE, JSP, MySQL, Git, Maven, Intellij, Struts 2. Spring (MVC), Spring Data, Thymeleaf, JPA, Hibernate, Jquery, Bootstrap, Javascript, Ajax, HTML5, CSS."

    },
    {
      empresa : "TBSCG",
      cargo: "Senior Software Development Engineer",
      breveDescripcion : "Desarrollo de nuevas funcionalidades y corrección de errores de la intranet",
      img : "assets/img/tbscg.png",
      tecnologiasUsadas : "Java 8, JEE, JSP, MySQL, Git, Maven, Intellij, Struts 2. Spring (MVC), Spring Data, Thymeleaf, JPA, Hibernate, Jquery, Bootstrap, Javascript, Ajax, HTML5, CSS."
    },
    {
      empresa : "Proximity",
      cargo: "Senior Software Development Engineer",
      breveDescripcion : "Desarrollo de nuevas funcionalidades y corrección de errores de la intranet",
      img : "assets/img/proximity.png",
      tecnologiasUsadas : "Java 8, JEE, JSP, MySQL, Git, Maven, Intellij, Struts 2. Angular Thymeleaf, JPA, Hibernate, Jquery, Bootstrap, Javascript, Ajax, HTML5, CSS."
    },
    {
      empresa : "Asus",
      cargo: "Senior Software Development Engineer",
      breveDescripcion : "Desarrollo de nuevas funcionalidades y corrección de errores de la intranet",
      img : "assets/img/asus.png",
      tecnologiasUsadas : "Java 8, JEE, JSP, MySQL, Git, Maven, Intellij, Struts 2.  Thymeleaf, JPA, Hibernate, Jquery, Bootstrap, Javascript, Ajax, HTML5, CSS."
    },
    {
      empresa : "Sopra Steria",
      cargo: "Senior Software Development Engineer",
      breveDescripcion : "Desarrollo de nuevas funcionalidades y corrección de errores de la intranet",
      img : "assets/img/sopra.png",
      tecnologiasUsadas : "Java 8, JEE, JSP, MySQL, Git, Maven, Intellij, Struts 2.  Thymeleaf, JPA, Hibernate, Jquery, Bootstrap, Javascript, Ajax, HTML5, CSS."

    },
    {
      empresa : "TBSCG",
      cargo: "Senior Software Development Engineer",
      breveDescripcion : "Desarrollo de nuevas funcionalidades y corrección de errores de la intranet",
      img : "assets/img/tbscg.png",
      tecnologiasUsadas : "Java 8, JEE, JSP, MySQL, Git, Maven, Intellij, Struts 2.  Thymeleaf, JPA, Hibernate, Jquery, Bootstrap, Javascript, Ajax, HTML5, CSS."
    },
    {
      empresa : "Proximity",
      cargo: "Senior Software Development Engineer",
      breveDescripcion : "Desarrollo de nuevas funcionalidades y corrección de errores de la intranet",
      img : "assets/img/proximity.png",
      tecnologiasUsadas : "Java 8, JEE, JSP, MySQL, Git, Maven, Intellij, Struts 2.  Thymeleaf, JPA, Hibernate, Jquery, Bootstrap, Javascript, Ajax, HTML5, CSS."
    }

  ] 

  constructor() {

    console.log('Experiencia Service Constructor');

   }

   public getExperiencia() : Experiencia[]{
     return this.experiencias;
   }

   public getDetalle(id : number) : Experiencia{
     return this.experiencias[id];

   }

   public filterExperienccias(termino:string) : Experiencia[]{
     let filterHeroes: Experiencia[] = [];
     termino = termino.toLowerCase();

     for(let expe of this.experiencias){
       let tecnologiaUsada = expe.tecnologiasUsadas.toLowerCase();


       if(tecnologiaUsada.indexOf(termino) >= 0){
         filterHeroes.push(expe);
       }
     }

     return filterHeroes;




   }
   



}

export interface Experiencia{
  empresa : string;
  cargo : string;
  breveDescripcion : string;
  img : string;
  tecnologiasUsadas : string;

}





