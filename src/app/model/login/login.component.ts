import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email!: string;
  contrasena!: string;
  user: User = new User();
  estaHabilitado: boolean = false;
    
  constructor(
    public userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ) {}
    
   
  onSubmit(form: NgForm) {
    //Recogemos el ID que nos llega en la url desde el formulario
    //this.email = this.activatedRoute.snapshot.params['email'];
    console.log(this.email = this.user.email);
    console.log(this.contrasena = this.user.contrasena)
    //Utilizamos el método de UserService para obtener usuario
    this.userService.findByEmailAndContrasena(this.email, this.contrasena).subscribe(
      user => {
        this.user = user;
        if (user.email && user.contrasena){
          console.log(user);
          this.estaHabilitado = true;
          this.router.navigate(['/userlist']);}
        
      }, 
      error => {console.log(this.user.email = "email incorrecto"); 
      console.log(this.user.contrasena = "contraseña incorrecta")});
    
  }
}