//se importan los componentes que se usan en éste archivo ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exp } from '../exp/exp';
import { ExpService } from '../exp/exp.service';

//ésto define los archivos del componente
@Component({
  selector: 'app-create-exp',
  templateUrl: './create-exp.component.html',
  styleUrls: ['./create-exp.component.css']
})

//se exporta la clase para que la usen otros componentes y se implementa al iniciarse
export class CreateExpComponent implements OnInit {

  //Creamos un nuevo item de Experiencia vacío y una lista vacía
  exp: Exp = new Exp();
  exps: Exp[] = []
 
  //el constructor pone a disposición las funcionalidades de router y expService
  constructor(
    private expService: ExpService,
    private router: Router) { }

  //metodo que se implementa al inicio, carga la lista de items de Experiencia
    ngOnInit(): void {
    this.getExps();
  }

  //Este método es llamado desde el formulario
  //Se encarga de disparar el método de guardado de items de Experiencia usando el método commitExp
  onSubmitForm(){
    console.log(this.exp);
    this.commitExp();
  }
 
  //Este método llama al createExp de expService.
  commitExp(){
    this.expService.createExp(this.exp).subscribe( //toma el valor de exp, lo usa como parámetro en createExp
    //y lo manda a la consola como expData
      expData =>{
        console.log(expData);
        //Llamamos al método de redirección para recargar la lista
        this.refreshPage();
      },
      error => console.log(error));
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
      //Volvemos a recuperar los items de Experiencia tras el borrado
      this.getExps();
    })
  }

  //metodo para recargar la página
  refreshPage() {
    window.location.reload();
   }
}
