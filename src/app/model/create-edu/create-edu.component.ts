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
 
  constructor(
    private eduSerice: EduService,
    private router: Router) { }

  ngOnInit(): void {
  }

  //Este método es llamado desde el formulario
  //Se encarga de disparar el método de guardado de usuarios
  onSubmitForm(){
    console.log(this.edu);
    this.commitEdu();
  }
 
  //Este método llama al createUser de userService.
  commitEdu(){
    this.eduSerice.createEdu(this.edu).subscribe( 
      eduData =>{
        console.log(eduData);
        //Llamamos al método de redirección para volver a la lista de usuarios
        this.redirectEduList();
      },
      error => console.log(error));
  }
 
  //Redirección a lista de usuarios
  redirectEduList(){
    this.router.navigate(['']);
  }

}
