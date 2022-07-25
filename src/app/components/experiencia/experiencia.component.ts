import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias: any = [];
  
  
  constructor(private experienciaservice : ExperienciaService) { }

  ngOnInit(): void {
    this.experienciaservice.getAllExperiencias().subscribe( (experiencias: any) => {
      this.experiencias = experiencias;
  })

  //onClick(){

  //}



}
NewExperiencia(){
  const app = document.getElementById("modal-formulario");
  app.style.display = "block"; 
}

EditExperiencia(){
  const app = document.getElementById("modal-formulario");
  app.style.display = "block"; 
}

cerrarModal(){
  
    const app = document.getElementById("modal-formulario");
  app.style.display = "none"; 
     
  
  
}

DeleteExperiencia(){
  alert('¡Ojo! estas borrando');
}
//deleteExperiencia(id: any){
//  this.experienciaservice.deleteExperiencia(id).subscribe()
//}

}
