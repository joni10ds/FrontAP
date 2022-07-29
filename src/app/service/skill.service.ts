import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  urlsApi: any;

  constructor(private http: HttpClient) { 
    this.urlsApi = {
      getskillEndpoint: 'https://argprog2022.herokuapp.com/ver/skills',
      newskillEndpoint: 'https://argprog2022.herokuapp.com/new/skill',
      deleteskillEndpoint: 'https://argprog2022.herokuapp.com/delete/skill/',
      editarskillEndpoint: 'https://argprog2022.herokuapp.com/editar/skill/', 
      
    }
  
    
  }
  public getAllSkills(): Observable<any> {
    return this.http.get(this.urlsApi.getskillEndpoint)
  }
  
  public newSkill(body: any) {
    return this.http.post(this.urlsApi.newskillEndpoint, body)
  }
  
  
  public deleteSkill(id: number): Observable<any> {
    return this.http.delete<any>(this.urlsApi.deleteskillEndpoint+`${id}`)
  }
  
  public editarSkill(id: number, body: any) {
    return this.http.put(this.urlsApi.editarskillEndpoint+`${id}`, id, body)
  }

  }
