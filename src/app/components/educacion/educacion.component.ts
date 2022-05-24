import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educaciones: any = {};


  constructor(private educacionservice : EducacionService) { }

  ngOnInit(): void {
    this.educacionservice.getAllEducaciones().subscribe( (educaciones: any) => {
      this.educaciones = educaciones;
  })
}

}

