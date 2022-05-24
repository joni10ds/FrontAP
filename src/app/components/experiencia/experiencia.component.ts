import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias: any = {};

  
  constructor(private experienciaservice : ExperienciaService) { }

  ngOnInit(): void {
    this.experienciaservice.getAllExperiencias().subscribe( (experiencias: any) => {
      this.experiencias = experiencias;
  })
}

}
