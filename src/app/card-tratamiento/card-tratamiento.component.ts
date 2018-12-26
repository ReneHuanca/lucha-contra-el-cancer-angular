import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-card-tratamiento',
  templateUrl: './card-tratamiento.component.html',
  styleUrls: ['./card-tratamiento.component.css']
})
export class CardTratamientoComponent implements OnInit {

  @Input() datoPublicacion : any = {};
   constructor() { }

  ngOnInit() {
  }

}
