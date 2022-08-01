//se importan los componentes que se usan en éste archivo ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exp } from '../exp/exp';
import { ExpService } from '../exp/exp.service';

//ésto define los archivos del componente
@Component({
  selector: 'app-exp-list',
  templateUrl: './exp-list.component.html',
  styleUrls: ['./exp-list.component.css']
})

//se exporta la clase para que la usen otros componentes y se implementa al iniciarse
export class ExpListComponent implements OnInit {

  exps: Exp[] = []//lista de items de Experiencia
  

  //el constructor pone a disposición las funcionalidades de router y eduService
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
    //Utilizamos el servicio inyectado para encontrar los items de Experiencia
    this.expService.findAllExps().subscribe(
      //Arrow function, funcion anónima similar a expersiones Lambda
      expData => {this.exps = expData}
    );
  }

  updateExp(id: number){//método para actualizar los items
    //Lo envía a través de app-routing.module.ts
    this.router.navigate(['updateexp', id]);
  }

  deleteExp(id: number){//método para borrar los items
    this.expService.deleteExp(id).subscribe( 
      expData => {
      console.log(expData);
      //Volvemos a recuperar los items de Experiencia tras el borrado
      this.getExps();
    })
  }

  
}
