//se importan los componentes que se usan en éste archivo ts
import { Component, OnInit } from '@angular/core';

//ésto define los archivos del componente
@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})

//se exporta la clase para que la usen otros componentes y se implementa al iniciarse
export class HabilidadesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
