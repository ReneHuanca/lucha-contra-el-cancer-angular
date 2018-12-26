import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-card-prevencion',
  templateUrl: './card-prevencion.component.html',
  styleUrls: ['./card-prevencion.component.css']
})
export class CardPrevencionComponent implements OnInit {
    
  @Input() datoPublicacion : any = {};
  constructor() { }

  ngOnInit() {
  }

}
