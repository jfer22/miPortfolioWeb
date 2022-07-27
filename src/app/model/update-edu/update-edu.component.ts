import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Edu } from '../edu/edu';
import { EduService } from '../edu/edu.service';

@Component({
  selector: 'app-update-edu',
  templateUrl: './update-edu.component.html',
  styleUrls: ['./update-edu.component.css']
})
export class UpdateEduComponent implements OnInit {

  edu: Edu = new Edu();
  id!: number;

  constructor(
    private eduService: EduService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    //Recogemos el ID que nos llega en la url desde el formulario
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id)
    //Utilizamos el método de UserService para obtener usuario
    this.eduService.getEduById(this.id).subscribe(
      edu => {
        this.edu = edu;
      }, 
      error => console.log(error));
  }

  //Metodo referenciado por el forumulario HTML
  onSubmitForm(){
    this.eduService.updateEdu(this.id, this.edu).subscribe( 
      eduData =>{
        console.log(eduData);
        this.redirectUserList();
      }, 
      error => console.log(error));
  }

  //Redirección a lista de usuarios
  redirectUserList(){
    this.router.navigate(['/userlist']);
  }

}
