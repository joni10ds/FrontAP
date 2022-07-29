import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  urlsApi: any;

  constructor(private http: HttpClient) { 
  this.urlsApi = {
    getexperienciaEndpoint: 'https://argprog2022.herokuapp.com/ver/experiencias',
    newexperienciaEndpoint: 'https://argprog2022.herokuapp.com/new/experiencia',
    deleteexperienciaEndpoint: 'https://argprog2022.herokuapp.com/delete/experiencia/',
    editarexperienciaEndpoint: 'https://argprog2022.herokuapp.com/editar/experiencia/',    
  }

}

public getAllExperiencias(): Observable<any> {
  return this.http.get(this.urlsApi.getexperienciaEndpoint)
}

public newExperiencia(body: any) {
  return this.http.post(this.urlsApi.newexperienciaEndpoint, body)
}

public deleteExperiencia(id: number): Observable<any> {
  return this.http.delete<any>(this.urlsApi.deleteexperienciaEndpoint+`${id}`)
}

public editarExperiencia(id: number, body: any) {
  return this.http.put(this.urlsApi.editarexperienciaEndpoint+ `${id}`, id, body)
}

}