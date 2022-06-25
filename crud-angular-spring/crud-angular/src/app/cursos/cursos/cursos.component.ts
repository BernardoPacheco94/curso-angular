import { Curso } from './../modelo/curso';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: Curso[] = [
    { _id: '1', nome:'Angular', categoria:'Front-End' }
  ];
  displayedColumns = ['nome', 'categoria']

  constructor() {

  }

  ngOnInit(): void {
  }

}
