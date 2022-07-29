import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educaciones: any = [];

  id? = "";
  tipo: String = "";
  carrera: String = "";
  establecimiento: String = "";
  fechainicio: String = "";
  fechafin: String = ""; 

  educacionService: any;

  constructor(private educacionservice : EducacionService, private router: Router) { }

  ngOnInit(): void {
    this.educacionservice.getAllEducaciones().subscribe( (educaciones: any) => {
      this.educaciones = educaciones;
  })
}

Educacion(){
  let body = {
    tipo: this.tipo,
    carrera: this.carrera,
    establecias: this.establecimiento,
    fechainicio: this.fechainicio,
    fechafin: this.fechafin
  }
  this.educacionservice.newEducacion(body).subscribe(data=>{
    console.log("Se creó una nueva Educación: "+data);
    const app = document.getElementById("modal-formulario2");
    app.style.display = "none";
    this.ngOnInit();
   })
 
}
NewEducacion(){
  const app = document.getElementById("modal-formulario2");
  app.style.display = "block";
}

EditEducacion(){
  const app = document.getElementById("modal-formulario2");
  app.style.display = "block"; 
}

DeleteEducacion(id:number) {
  alert ('Ojo! estas borrando una educación')
  alert(id)
  this.educacionservice.deleteEducacion(id).subscribe(data=>{
    console.log("Se borró una Educación: "+data);
    this.ngOnInit();
})

 }

//-----------------MODAL---------------
cerrarModal(){
  const app = document.getElementById("modal-formulario2");
  app.style.display = "none"; 
}

}

