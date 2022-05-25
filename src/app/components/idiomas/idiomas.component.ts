import { Component, OnInit } from '@angular/core';
import { IdiomaService } from 'src/app/service/idioma.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {
  idiomas: any = {};

  constructor(private idiomaservice : IdiomaService) { }

  ngOnInit(): void {
    this.idiomaservice.getAllIdiomas().subscribe( (idiomas: any) => {
      this.idiomas = idiomas;
    })
  }

}