import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {
  urlsApi: any;

  constructor(private http: HttpClient) { 
    this.urlsApi = {
      getidiomaEndpoint: 'https://argprog2022.herokuapp.com/ver/idiomas',
      newidiomaEndpoint: 'https://argprog2022.herokuapp.com/new/idioma',
      deleteidiomaEndpoint: 'https://argprog2022.herokuapp.com/delete/idioma/',
      editaridiomaEndpoint: 'https://argprog2022.herokuapp.com/editar/idioma/', 
      
    }
  
    
  }
  public getAllIdiomas(): Observable<any> {
    return this.http.get(this.urlsApi.getidiomaEndpoint)
  }
  
  public newIdioma(body: any) {
    return this.http.post(this.urlsApi.newidiomaEndpoint, body)
  }
  
  
  public deleteIdioma(id: number): Observable<any> {
    return this.http.delete<any>(this.urlsApi.deleteidiomaEndpoint+`${id}`)
  }
  
  public editarIdioma(id: number, body: any) {
    return this.http.put(this.urlsApi.editaridiomaEndpoint+`${id}`, id, body)
  }

  }
