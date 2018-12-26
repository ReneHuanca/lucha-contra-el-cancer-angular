import { Component, OnInit } from '@angular/core';
import { CentrosMedicos } from './datos';
 
@Component({
  selector: 'app-centros-medicos',
  templateUrl: './centros-medicos.component.html',
  styleUrls: ['./centros-medicos.component.css']
})
export class CentrosMedicosComponent implements OnInit {

  datos: Array<any> = CentrosMedicos;
  constructor() { }

  ngOnInit() {
  }

}
