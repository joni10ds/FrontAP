import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  urlsApi: any;

  constructor(private http: HttpClient) { 
    this.urlsApi = {
      //cuando levantamos la base online cambiar la url http://localhost:8080/ por la url de la base
      getproyectoEndpoint: 'http://localhost:8080/ver/proyectos',
      
    }
  
    
  }
  public getAllProyectos(): Observable<any> {
    return this.http.get(this.urlsApi.getproyectoEndpoint)
  }
  
  
  }
