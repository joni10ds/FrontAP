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
      getproyectoEndpoint: 'https://argprog2022.herokuapp.com/ver/proyectos',
      newproyectoEndpoint: 'https://argprog2022.herokuapp.com/new/proyecto',
      deleteproyectoEndpoint: 'https://argprog2022.herokuapp.com/delete/proyecto/',
      editarproyectoEndpoint: 'https://argprog2022.herokuapp.com/editar/proyecto/', 
      
    }
  
    
  }
  public getAllProyectos(): Observable<any> {
    return this.http.get(this.urlsApi.getproyectoEndpoint)
  }
  
  public newProyecto(body: any) {
    return this.http.post(this.urlsApi.newproyectoEndpoint, body)
  }
  
  
  public deleteProyecto(id: number): Observable<any> {
    return this.http.delete<any>(this.urlsApi.deleteproyectoEndpoint+`${id}`)
  }
  
  public editarProyecto(id: number, body: any) {
    return this.http.put(this.urlsApi.editarproyectoEndpoint+`${id}`, id, body)
  }

  }
