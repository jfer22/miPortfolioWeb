//se importan los componentes que se usan en éste archivo ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Edu } from '../edu/edu';
import { EduService } from '../edu/edu.service';

//ésto define los archivos del componente
@Component({
  selector: 'app-create-edu',
  templateUrl: './create-edu.component.html',
  styleUrls: ['./create-edu.component.css']
})

//se exporta la clase para que la usen otros componentes y se implementa al iniciarse
export class CreateEduComponent implements OnInit {

  //Creamos un nuevo item de Educación vacío y una lista vacía
  edu: Edu = new Edu();
  edus: Edu[] = []

  //el constructor pone a disposición las funcionalidades de router y eduService
  constructor(
    private eduService: EduService,
    private router: Router) { }
  
  //metodo que se implementa al inicio, carga la lista de items de Educación
  ngOnInit(): void {
    this.getEdus();
  }

  //Este método es llamado desde el formulario
  //Se encarga de disparar el método de guardado de items de Educación usando el método commitEdu
  onSubmitForm() {
    console.log(this.edu);
    this.commitEdu();
  }

  //Este método llama al createEdu de eduService.
  commitEdu() {
    this.eduService.createEdu(this.edu).subscribe(//toma el valor de edu, lo usa como parámetro en createEdu
    //y lo manda a la consola como eduData
      eduData => {
        console.log(eduData);
        //Llamamos al método de redirección para recargar la lista
        this.refreshPage();
      },
      error => console.log(error));
  }
  
  private getEdus() {
    //Utilizamos el servicio inyectado para encontrar los usuarios
    this.eduService.findAllEdus().subscribe(
      //Arrow function, funcion anónima similar a expresiones Lambda
      eduData => { this.edus = eduData }
    );
  }

  updateEdu(id: number) {
    //Lo envía a través de app-routing.module.ts
    this.router.navigate(['updateedu', id]);
  }

  deleteEdu(id: number) {
    this.eduService.deleteEdu(id).subscribe(
      eduData => {
        console.log(eduData);
        //Volvemos a recuperar los items de Educación tras el borrado
        this.getEdus();
      })
  }

  //metodo para recargar la página
  refreshPage() {
    window.location.reload();
   }

}
