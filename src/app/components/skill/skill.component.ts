import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skills: any = [];

  constructor(private skillservice : SkillService) { }

  ngOnInit(): void {
    this.skillservice.getAllSkills().subscribe( (skills: any) => {
      this.skills = skills;
    })
  }

}