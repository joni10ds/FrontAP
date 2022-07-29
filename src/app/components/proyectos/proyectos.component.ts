import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: any = [];

  constructor(private proyectoservice : ProyectoService) { }

  ngOnInit(): void {
    this.proyectoservice.getAllProyectos().subscribe( (proyectos: any) => {
      this.proyectos = proyectos;
    })
  }

}