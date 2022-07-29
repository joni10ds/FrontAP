import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias: any = [];

  id? = "";
  empresa: String = "";
  puesto: String = "";
  fechaingreso: String = "";
  fechasalida: String = "";
  detalle: String = "";  
  
  experienciaService: any;
  
  constructor(private experienciaservice : ExperienciaService, private router: Router) { }

  ngOnInit(): void {
    this.experienciaservice.getAllExperiencias().subscribe( (experiencias: any) => {
      this.experiencias = experiencias;
  })
}

Experiencia(){
  let body = {
    empresa: this.empresa,
    puesto: this.puesto,
    fechaingreso: this.fechaingreso,
    fechasalida: this.fechasalida,
    detalle: this.detalle
  }
  this.experienciaservice.newExperiencia(body).subscribe(data=>{
    console.log("Se creó una nueva Experiencia: "+data);
    const app = document.getElementById("modal-formulario");
    app.style.display = "none";
    this.ngOnInit();
   })
 
}
NewExperiencia(){
  const app = document.getElementById("modal-formulario");
  app.style.display = "block";
}

EditExperiencia(){
  const app = document.getElementById("modal-formulario");
  app.style.display = "block"; 
}

DeleteExperiencia(id:number) {
  alert ('Ojo! estas borrando una experiencia')
  alert(id)
  this.experienciaservice.deleteExperiencia(id).subscribe(data=>{
    console.log("Se borró una Experiencia: "+data);
    this.ngOnInit();
})

 }

//-----------------MODAL---------------
cerrarModal(){
  const app = document.getElementById("modal-formulario");
  app.style.display = "none"; 
}



}
