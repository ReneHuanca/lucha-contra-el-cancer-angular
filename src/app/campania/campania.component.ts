import { Component } from '@angular/core';
import { publicaciones } from './datos';

@Component({
    selector: 'app-campania',
    templateUrl: './campania.component.html'
})

export class CampaniaComponent{
    
    datos : Array<any> = publicaciones;
}