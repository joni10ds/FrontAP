import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AcercadeService {
  urlsApi: any;

  constructor(private http: HttpClient) { 
    this.urlsApi = {
      getacercadeEndpoint: 'https://argprog2022.herokuapp.com/ver/personas',
      newpersonaEndpoint: 'https://argprog2022.herokuapp.com/new/persona',
      deletepersonaEndpoint: 'https://argprog2022.herokuapp.com/delete/persona/',
      editarpersonaEndpoint: 'https://argprog2022.herokuapp.com/editar/persona/',
      
    }

    
  }
  public getAllPersonas(): Observable<any> {
    return this.http.get(this.urlsApi.getacercadeEndpoint)
  }
  
  public newPersona(body: any) {
    return this.http.post(this.urlsApi.newpersonaEndpoint, body)
  }
  
  
  public deletePersona(id: number): Observable<any> {
    return this.http.delete<any>(this.urlsApi.deletepersonaEndpoint+`${id}`)
  }
  
  public editarPersona(id: number, body: any) {
    return this.http.put(this.urlsApi.editarpersonaEndpoint+`${id}`, id, body)
  }
}
