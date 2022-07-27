import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exp } from '../exp/exp';
import { ExpService } from '../exp/exp.service';

@Component({
  selector: 'app-exp-list',
  templateUrl: './exp-list.component.html',
  styleUrls: ['./exp-list.component.css']
})
export class ExpListComponent implements OnInit {

  exps: Exp[] = []
  

  constructor(
    //Inyectamos el UserService que hemos importado
    private expService : ExpService,
    private router: Router
  ) { }

  //De la documentación: A lifecycle hook that is called after Angular 
  //has initialized all data-bound properties of a directive.
  ngOnInit(): void {
      this.getExps();
    
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
