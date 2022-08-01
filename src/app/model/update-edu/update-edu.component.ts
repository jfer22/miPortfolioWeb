//se importan los componentes que se usan en éste archivo ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Edu } from '../edu/edu';
import { EduService } from '../edu/edu.service';

//ésto define los archivos del componente
@Component({
  selector: 'app-update-edu',
  templateUrl: './update-edu.component.html',
  styleUrls: ['./update-edu.component.css']
})

//se exporta la clase para que la usen otros componentes y se implementa al iniciarse
export class UpdateEduComponent implements OnInit {

  //lista de atributos para cargar el valor del item, editarlo y enviarlo a la db
  edu: Edu = new Edu();
  id!: number;

  constructor(
    private eduService: EduService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    //Recogemos el ID que nos llega desde el formulario
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id)
    //Utilizamos el método de UserService para obtener usuario
    this.eduService.getEduById(this.id).subscribe(
      edu => {
        this.edu = edu;
      }, 
      error => console.log(error));
  }

  //Metodo referenciado por el forumulario HTML ante el evento de submit del botón
  onSubmitForm(){
    this.eduService.updateEdu(this.id, this.edu).subscribe( //toma los valores obtenidos arriba y los actualiza
      eduData =>{
        console.log(eduData);
        this.redirectUserList();//vuelve a la lista de usuarios
      }, 
      error => console.log(error));
  }

  //Redirección a lista de usuarios
  redirectUserList(){
    this.router.navigate(['/createuser']);
  }

}
