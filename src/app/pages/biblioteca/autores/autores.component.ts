import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {
public titulo="formulario de autores";
public nombre :String;
public apellido :String;
public fechaN :String;
public nacionalidad :String;
  constructor() { }

  ngOnInit() {
  }

}
