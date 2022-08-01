//se importan los componentes que se usan en éste archivo ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

//ésto define los archivos del componente
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})

//se exporta la clase para que la usen otros componentes y se implementa al iniciarse
export class CreateUserComponent implements OnInit {
 
  //Creamos un nuevo usuario vacío y una lista vacía
  user: User = new User();
  users: User[] = [];
 
  //el constructor pone a disposición las funcionalidades de router y userService
  constructor(
    private userService: UserService,
    private router: Router) { }
 
  //metodo que se implementa al inicio, carga la lista de Usuarios
    ngOnInit(): void {
    this.getUsers();
  }
 
  //Este método es llamado desde el formulario
  //Se encarga de disparar el método de guardado de usuarios
  onSubmitForm(){
    console.log(this.user);
    this.commitUser();
  }
 
  //Este método llama al createUser de userService.
  commitUser(){
    this.userService.createUser(this.user).subscribe( 
      userData =>{
        console.log(userData);
        //Llamamos al método de redirección para recargar la lista
        this.refreshPage();
      },
      error => console.log(error));
  }
 
  private getUsers(){
    //Utilizamos el servicio inyectado para encontrar los usuarios
    this.userService.findAllUsers().subscribe(
      //Arrow function, funcion anónima similar a expersiones Lambda
      userData => {this.users = userData}
    );
  }

  updateUser(id: number){
    //Lo envía a través de app-routing.module.ts
    this.router.navigate(['updateuser', id]);
  }

  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe( 
      userData => {
      console.log(userData);
      //Volvemos a recuperar los Users tras el borrado
      this.getUsers();
    })
  }

  //metodo para recargar la página
  refreshPage() {
    window.location.reload();
   }
}
