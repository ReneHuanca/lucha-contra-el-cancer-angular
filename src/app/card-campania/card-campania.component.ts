import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-campania',
  templateUrl: './card-campania.component.html',
  styleUrls: ['./card-campania.component.css']
})
export class CardCampaniaComponent implements OnInit {

  @Input() datoPublicacion: any = {};
  constructor() { }

  ngOnInit() {
  }


}
