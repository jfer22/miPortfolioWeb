//se importan los componentes que se usan en éste archivo ts
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

//ésto define los archivos del componente
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

//se exporta la clase para que la usen otros componentes
export class LoginComponent {

  //atributos dela clase login
  email!: string;
  contrasena!: string;
  user: User = new User();
  mensaje: string = "";
    
  //el constructor pone a disposición las funcionalidades de router, activated route y eduService
  constructor(
    public userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ) {}
    
   
  onSubmit(form: NgForm) {
    //asigno los datos del formulario como atributos de un posible usuario
    console.log(this.email = this.user.email);
    console.log(this.contrasena = this.user.contrasena)
    //Utilizamos el método de UserService para obtener el usuario buscando el usuario y la contraseña juntos
    this.userService.findByEmailAndContrasena(this.email, this.contrasena).subscribe(
      user => {//si hay coincidencia, se redirige a la lista de usuarios con el menu para editar
        this.user = user;
        this.router.navigate(['/createuser']);
        
      }, //si no existe el usuario habrá un error y se muestra el mensaje de error
      error => {console.log(this.mensaje ="Usuario o contraseña Incorrecta")});
    
  }
}