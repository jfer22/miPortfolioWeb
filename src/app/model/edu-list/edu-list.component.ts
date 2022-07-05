import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Edu } from '../edu/edu';
import { EduService } from '../edu/edu.service';

@Component({
  selector: 'app-edu-list',
  templateUrl: './edu-list.component.html',
  styleUrls: ['./edu-list.component.css']
})
export class EduListComponent implements OnInit {

  edus: Edu[] = []

  constructor(
    //Inyectamos el UserService que hemos importado
    private eduService : EduService,
    private router: Router
  ) { }

  //De la documentación: A lifecycle hook that is called after Angular 
  //has initialized all data-bound properties of a directive.
  ngOnInit(): void {
    this.getEdus();
  }

  private getEdus(){
    //Utilizamos el servicio inyectado para encontrar los usuarios
    this.eduService.findAllEdus().subscribe(
      //Arrow function, funcion anónima similar a expersiones Lambda
      eduData => {this.edus = eduData}
    );
  }

  updateEdu(id: number){
    //Lo envía a través de app-routing.module.ts
    this.router.navigate(['updateedu', id]);
  }

  deleteEdu(id: number){
    this.eduService.deleteEdu(id).subscribe( 
      eduData => {
      console.log(eduData);
      //Volvemos a recuperar los Users tras el borrado
      this.getEdus();
    })
  }

}
