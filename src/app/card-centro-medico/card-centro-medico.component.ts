import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-centro-medico',
  templateUrl: './card-centro-medico.component.html',
  styleUrls: ['./card-centro-medico.component.css']
})
export class CardCentroMedicoComponent implements OnInit {
  
  @Input() datoPublicacion: any = {};
  constructor() { }

  ngOnInit() {
  }

}
