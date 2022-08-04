//se importan los componentes que se usan en éste archivo ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Edu } from './edu';


@Injectable({//Decorador que marca una clase como disponible para ser provista e inyectada como una dependencia
  providedIn: 'root'//determina que inyectores proveerán el inyectable
})
export class EduService {//se exporta la clase para que la usen otros componentes

  //Endpoint del Backend
  private backendURL: string = "https://lit-earth-29157.herokuapp.com";
   
  constructor(
    //HttpClient para proporcionar métodos que reciben datos del backend
    private httpClient: HttpClient
    ) { }
 
  //GET LISTA COMPLETA
  findAllEdus(): Observable<Edu[]>{//Los observables dan soporte para pasar mensajes entre partes de la aplicación
    return this.httpClient.get<Edu[]>(`${this.backendURL}/ver/edus`);
  }//Usa un get para traer los items de Educación y se coloca el la lista Edu

  //POST
  createEdu(user: Edu): Observable<Object>{
    return this.httpClient.post(`${this.backendURL}/new/educacion`, user);
  }//Usa un post para generar un nuevo item de Educación

  //PUT
  updateEdu(id: number, edu: Edu): Observable<Object>{
    return this.httpClient.put(`${this.backendURL}/updateEdu/${id}`, edu);
  }//Usa un put para modificar el item de Educación que corresponde con el id
 
  //DELETE
  deleteEdu(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.backendURL}/deleteEdu/${id}`);
  }//Usa un delete para borrar el item de Educación que corresponde con el id

  //GET UN SOLO CLIENTE
  getEduById(id: number): Observable<Edu>{
    return this.httpClient.get<Edu>(`${this.backendURL}/updateEdu/${id}`);
  }//Usa un get para traer el item de Educación que corresponde con el id
}
