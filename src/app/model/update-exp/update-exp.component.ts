import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exp } from '../exp/exp';
import { ExpService } from '../exp/exp.service';

@Component({
  selector: 'app-update-exp',
  templateUrl: './update-exp.component.html',
  styleUrls: ['./update-exp.component.css']
})
export class UpdateExpComponent implements OnInit {
  exp: Exp = new Exp();
  id!: number;

  constructor(
    private expService: ExpService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    //Recogemos el ID que nos llega en la url desde el formulario
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id)
    //Utilizamos el método de UserService para obtener usuario
    this.expService.getExpById(this.id).subscribe(
      exp => {
        this.exp = exp;
      }, 
      error => console.log(error));
  }

  //Metodo referenciado por el forumulario HTML
  onSubmitForm(){
    this.expService.updateExp(this.id, this.exp).subscribe( 
      expData =>{
        console.log(expData);
        this.redirectUserList();
      }, 
      error => console.log(error));
  }

  //Redirección a lista de usuarios
  redirectUserList(){
    this.router.navigate(['/userlist']);
  }

}
