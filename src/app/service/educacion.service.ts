import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  urlsApi: any;

  constructor(private http: HttpClient) { 
    this.urlsApi = {
      geteducacionEndpoint: 'https://argprog2022.herokuapp.com/ver/educaciones',
      neweducacionEndpoint: 'https://argprog2022.herokuapp.com/new/educacion',
      deleteeducacionEndpoint: 'https://argprog2022.herokuapp.com/delete/educacion/',
      editareducacionEndpoint: 'https://argprog2022.herokuapp.com/editar/educacion/', 
      
    }

    
  }
  public getAllEducaciones(): Observable<any> {
    return this.http.get(this.urlsApi.geteducacionEndpoint)
  }

  public newEducacion(body: any) {
    return this.http.post(this.urlsApi.neweducacionEndpoint, body)
  }
  
  
  public deleteEducacion(id: number): Observable<any> {
    return this.http.delete<any>(this.urlsApi.deleteeducacionEndpoint+`${id}`)
  }
  
  public editarEducacion(id: number, body: any) {
    return this.http.put(this.urlsApi.editareducacionEndpoint+`${id}`, id, body)
  }
}



