//se importan los componentes que se usan en éste archivo ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Edu } from '../edu/edu';
import { EduService } from '../edu/edu.service';

//ésto define los archivos del componente
@Component({
  selector: 'app-edu-list',
  templateUrl: './edu-list.component.html',
  styleUrls: ['./edu-list.component.css']
})

//se exporta la clase para que la usen otros componentes y se implementa al iniciarse
export class EduListComponent implements OnInit {

  edus: Edu[] = []//lista de items de Educación

  //el constructor pone a disposición las funcionalidades de router y eduService
  constructor(
    private eduService : EduService,
    private router: Router
  ) { }

  //De la documentación: A lifecycle hook that is called after Angular 
  //has initialized all data-bound properties of a directive.
  ngOnInit(): void {
    this.getEdus();
  }

  private getEdus(){
    //Utilizamos el servicio inyectado para encontrar los items de Educación
    this.eduService.findAllEdus().subscribe(
      //Arrow function, funcion anónima similar a expersiones Lambda
      eduData => {this.edus = eduData}
    );
  }

  updateEdu(id: number){//método para actualizar los items
    //Lo envía a través de app-routing.module.ts
    this.router.navigate(['updateedu', id]);
  }

  deleteEdu(id: number){//método para borrar los items
    this.eduService.deleteEdu(id).subscribe( 
      eduData => {
      console.log(eduData);
      //Volvemos a recuperar los items de Educación tras el borrado
      this.getEdus();
    })
  }

}
