import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
 
  //Cramos un nuevo usuario vacío
  user: User = new User();
  users: User[] = [];
 
  constructor(
    private userService: UserService,
    private router: Router) { }
 
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
        //Llamamos al método de redirección para volver a la lista de usuarios
        this.redirectUserList();
      },
      error => console.log(error));
  }
 
  //Redirección a lista de usuarios
  redirectUserList(){
    this.router.navigate(['/userlist']);
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
}
