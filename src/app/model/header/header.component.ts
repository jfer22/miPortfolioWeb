//se importan los componentes que se usan en éste archivo ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//ésto define los archivos del componente
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

//se exporta la clase para que la usen otros componentes y se implementa al iniciarse
export class HeaderComponent implements OnInit {

  //el constructor pone a disposición las funcionalidades de router
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  
}
