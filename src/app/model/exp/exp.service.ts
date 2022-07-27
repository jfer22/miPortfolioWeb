import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exp } from './exp';

@Injectable({
  providedIn: 'root'
})
export class ExpService {
  //Endpoint del Backend
  private backendURL: string = "http://localhost:8080";
   
  constructor(
    //HttpClient para proporcionar métodos que reciben datos del backend
    private httpClient: HttpClient
    ) { }
 
  //GET LISTA COMPLETA
  findAllExps(): Observable<Exp[]>{
    return this.httpClient.get<Exp[]>(`${this.backendURL}/ver/exps`);
  }

  //POST
  createExp(exp: Exp): Observable<Object>{
    return this.httpClient.post(`${this.backendURL}/new/experiencia`, exp);
  }

  //PUT
  updateExp(id: number, exp: Exp): Observable<Object>{
    return this.httpClient.put(`${this.backendURL}/updateExp/${id}`, exp);
  }
 
  //DELETE
  deleteExp(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.backendURL}/deleteExp/${id}`);
  }

  //GET UN SOLO CLIENTE
  getExpById(id: number): Observable<Exp>{
    return this.httpClient.get<Exp>(`${this.backendURL}/updateExp/${id}`);
  }
}