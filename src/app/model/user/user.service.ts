import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
 
@Injectable({
  providedIn: 'root'
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

  //POST
  createUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.backendURL}/new/persona`, user);
  }

  //PUT
  updateUser(id: number, user: User): Observable<Object>{
    return this.httpClient.put(`${this.backendURL}/update/${id}`, user);
  }
 
  //DELETE
  deleteUser(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.backendURL}/deleteUser/${id}`);
  }

  //GET UN SOLO CLIENTE
  getUserById(id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.backendURL}/update/${id}`);
  }

  //GET UN SOLO CLIENTE
  findByEmailAndContrasena(email: String, contrasena: String): Observable<User>{
    return this.httpClient.get<User>(`${this.backendURL}/login/${email}/${contrasena}`);
  }

  
  
}