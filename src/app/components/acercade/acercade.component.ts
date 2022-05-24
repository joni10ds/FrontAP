import { Component, OnInit} from '@angular/core';
import { AcercadeService } from 'src/app/service/acercade.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  personas: any = {};
  
  
  constructor(private acercadeservice : AcercadeService) { }

  ngOnInit(): void {
    this.acercadeservice.getAllPersonas().subscribe( (personas: any) => {
      this.personas = personas;
    })
  }

}
