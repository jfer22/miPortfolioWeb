import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Edu } from './edu';

@Injectable({
  providedIn: 'root'
})
export class EduService {

  //Endpoint del Backend
  private backendURL: string = "http://localhost:8080";
   
  constructor(
    //HttpClient para proporcionar métodos que reciben datos del backend
    private httpClient: HttpClient
    ) { }
 
  //GET LISTA COMPLETA
  findAllEdus(): Observable<Edu[]>{
    return this.httpClient.get<Edu[]>(`${this.backendURL}/ver/edus`);
  }

  //POST
  createEdu(user: Edu): Observable<Object>{
    return this.httpClient.post(`${this.backendURL}/new/educacion`, user);
  }

  //PUT
  updateEdu(id: number, edu: Edu): Observable<Object>{
    return this.httpClient.put(`${this.backendURL}/update/${id}`, edu);
  }
 
  //DELETE
  deleteEdu(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.backendURL}/deleteEdu/${id}`);
  }

  //GET UN SOLO CLIENTE
  getEduById(id: number): Observable<Edu>{
    return this.httpClient.get<Edu>(`${this.backendURL}/update/${id}`);
  }
}
