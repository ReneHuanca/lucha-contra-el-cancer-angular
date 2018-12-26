import { Component } from '@angular/core';
import { publicaciones } from './datos';

@Component({
    selector: 'app-prevencion',
    templateUrl: './prevencion.component.html'
})

export class PrevencionComponent{
    
    datos: Array<any> = publicaciones;
    constructor(){
    }
}