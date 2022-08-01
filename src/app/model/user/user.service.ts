//se importan los componentes que se usan en éste archivo ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
 
@Injectable({//Decorador que marca una clase como disponible para ser provista e inyectada como una dependencia
  providedIn: 'root'//determina que inyectores proveerán el inyectable
})
export class UserService {
  //Endpoint del Backend
  private backendURL: string = "http://localhost:8080";
   
  constructor(
    //HttpClient para proporcionar métodos que reciben datos del backend
    private httpClient: HttpClient
    ) { }

  
  //GET LISTA COMPLETA
  findAllUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.backendURL}/ver/personas`);
  }

  //POST para generar un nuevo usuario
  createUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.backendURL}/new/persona`, user);
  }

  //PUT para actualizar los datos de un usuario usando el id
  updateUser(id: number, user: User): Observable<Object>{
    return this.httpClient.put(`${this.backendURL}/update/${id}`, user);
  }
 
  //DELETE para borrar un Usuario usando el id
  deleteUser(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.backendURL}/deleteUser/${id}`);
  }

  //GET UN SOLO CLIENTE para buscar un Usuario usando el id
  getUserById(id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.backendURL}/update/${id}`);
  }

  //GET para buscar un usuario que coincida con el email y la contraseña al mismo tiempo
  findByEmailAndContrasena(email: String, contrasena: String): Observable<User>{
    return this.httpClient.get<User>(`${this.backendURL}/login/${email}/${contrasena}`);
  }
 
}