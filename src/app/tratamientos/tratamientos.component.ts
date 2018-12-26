import { Component, OnInit } from '@angular/core';
import { publicaciones } from './datos';

@Component({
  selector: 'app-tratamientos',
  templateUrl: './tratamientos.component.html',
  styleUrls: ['./tratamientos.component.css']
})
export class TratamientosComponent implements OnInit {

  datos: Array<any> = publicaciones;
  constructor() { }

  ngOnInit() {
  }

}
