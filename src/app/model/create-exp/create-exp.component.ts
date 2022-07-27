import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exp } from '../exp/exp';
import { ExpService } from '../exp/exp.service';

@Component({
  selector: 'app-create-exp',
  templateUrl: './create-exp.component.html',
  styleUrls: ['./create-exp.component.css']
})
export class CreateExpComponent implements OnInit {

  //Cramos un nuevo usuario vacío
  exp: Exp = new Exp();
  exps: Exp[] = []
 
  constructor(
    private expService: ExpService,
    private router: Router) { }

  ngOnInit(): void {
    this.getExps();
  }

  //Este método es llamado desde el formulario
  //Se encarga de disparar el método de guardado de usuarios
  onSubmitForm(){
    console.log(this.exp);
    this.commitExp();
  }
 
  //Este método llama al createUser de userService.
  commitExp(){
    this.expService.createExp(this.exp).subscribe( 
      expData =>{
        console.log(expData);
        //Llamamos al método de redirección para volver a la lista de usuarios
        this.redirectExpList();
      },
      error => console.log(error));
  }
 
  //Redirección a lista de usuarios
  redirectExpList(){
    this.router.navigate(['/userlist']);
  }

  private getExps(){
    //Utilizamos el servicio inyectado para encontrar los usuarios
    this.expService.findAllExps().subscribe(
      //Arrow function, funcion anónima similar a expersiones Lambda
      expData => {this.exps = expData}
    );
  }

  updateExp(id: number){
    //Lo envía a través de app-routing.module.ts
    this.router.navigate(['updateexp', id]);
  }

  deleteExp(id: number){
    this.expService.deleteExp(id).subscribe( 
      expData => {
      console.log(expData);
      //Volvemos a recuperar los Users tras el borrado
      this.getExps();
    })
  }
}
