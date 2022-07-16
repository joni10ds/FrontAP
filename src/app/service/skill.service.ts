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
      //cuando levantamos la base online cambiar la url http://localhost:8080/ por la url de la base
      getskillEndpoint: 'https://argprog2022.herokuapp.com/ver/skills',
      
    }
  
    
  }
  public getAllSkills(): Observable<any> {
    return this.http.get(this.urlsApi.getskillEndpoint)
  }
  
  
  }
