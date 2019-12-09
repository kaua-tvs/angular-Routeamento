import { Component, OnInit } from '@angular/core';

import{ CursosService} from './cursos.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html'
})

export class CursoComponent implements OnInit{

  cursos: string[] = [];
  cursoService: CursosService;

  constructor(){
    this.cursoService = new CursosService();
  }

  ngOnInit(){//executado quando a classe for inicializada 
    this.cursos = this.cursoService.getCursos(); 
  }
}