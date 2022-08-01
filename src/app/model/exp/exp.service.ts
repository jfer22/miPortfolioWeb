//se importan los componentes que se usan en éste archivo ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exp } from './exp';

@Injectable({//Decorador que marca una clase como disponible para ser provista e inyectada como una dependencia
  providedIn: 'root'//determina que inyectores proveerán el inyectable
})
export class ExpService {//se exporta la clase para que la usen otros componentes
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

  //POST para agregar un item de Experiencia a la base de datos
  createExp(exp: Exp): Observable<Object>{
    return this.httpClient.post(`${this.backendURL}/new/experiencia`, exp);
  }

  //PUT para modificar un item de experiencia en la base de datos
  updateExp(id: number, exp: Exp): Observable<Object>{
    return this.httpClient.put(`${this.backendURL}/updateExp/${id}`, exp);
  }
 
  //DELETE para borrar un item de experiencia en la base de datos
  deleteExp(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.backendURL}/deleteExp/${id}`);
  }

  //GET UN SOLO CLIENTE para traer un item según el id
  getExpById(id: number): Observable<Exp>{
    return this.httpClient.get<Exp>(`${this.backendURL}/updateExp/${id}`);
  }
}