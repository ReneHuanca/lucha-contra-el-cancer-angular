import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//importar un modelo (objeto alumno)


//importar para la conexion a jso

import { FormBuilder, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoContraCancer';

  
  users: Array<any> =[];


  form: FormGroup;
  nombre: string = "";
  
  constructor(private http: HttpClient, private fb: FormBuilder)
  {
    this.form = this.fb.group({
      name: new FormControl(),
      password: new FormControl()
    });
    //para obtener datos del servidor no te olvides de importar
    this.http.get('http://jsonplaceholder.typicode.com/users')
    .subscribe((users:any)=>{
    console.log(users);
    this.users = users;
  });

  }
}
