import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './Slider/slider.component';
import { PrevencionComponent } from './prevencion/prevencion.component';
import { CardPrevencionComponent } from './card-prevencion/card-prevencion.component';
import { CampaniaComponent } from './campania/campania.component';
import { CentrosMedicosComponent } from './centros-medicos/centros-medicos.component';
import { TratamientosComponent } from './tratamientos/tratamientos.component';
import { CardCentroMedicoComponent } from './card-centro-medico/card-centro-medico.component';
import { ContactosComponent } from './contactos/contactos.component';
import { CardCampaniaComponent } from './card-campania/card-campania.component';
import { CardTratamientoComponent } from './card-tratamiento/card-tratamiento.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InformacionCampaniaComponent } from './informacion-campania/informacion-campania.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    PrevencionComponent,
    CardPrevencionComponent,
    CampaniaComponent,
    CentrosMedicosComponent,
    TratamientosComponent,
    CardCentroMedicoComponent,
    ContactosComponent,
    CardCampaniaComponent,
    CardTratamientoComponent,
    InformacionCampaniaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //siempre importar cuando utilizas
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
