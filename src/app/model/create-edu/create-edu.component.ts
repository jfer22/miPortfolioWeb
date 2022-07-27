import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Edu } from '../edu/edu';
import { EduService } from '../edu/edu.service';

@Component({
  selector: 'app-create-edu',
  templateUrl: './create-edu.component.html',
  styleUrls: ['./create-edu.component.css']
})
export class CreateEduComponent implements OnInit {

  //Cramos un nuevo usuario vacío
  edu: Edu = new Edu();
  edus: Edu[] = []
 
  constructor(
    private eduService: EduService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEdus();
  }

  //Este método es llamado desde el formulario
  //Se encarga de disparar el método de guardado de usuarios
  onSubmitForm(){
    console.log(this.edu);
    this.commitEdu();
  }
 
  //Este método llama al createUser de userService.
  commitEdu(){
    this.eduService.createEdu(this.edu).subscribe( 
      eduData =>{
        console.log(eduData);
        //Llamamos al método de redirección para volver a la lista de usuarios
        this.redirectEduList();
      },
      error => console.log(error));
  }
 
  //Redirección a lista de usuarios
  redirectEduList(){
    this.router.navigate(['/userlist']);
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
