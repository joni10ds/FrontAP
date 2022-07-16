import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url="http://npinti.ddns.net:9008/api/auth/login";
  currentUserSubject = BehaviorSubject<any>;
  constructor(private http: HttpClient) {
    console.log("El servicio de autenticación está corriendo");

  }

  
}
