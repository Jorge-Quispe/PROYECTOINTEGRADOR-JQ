import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { SubirdocumentosComponent } from './subirdocumentos/subirdocumentos.component';
import { DatosorganizacionComponent } from './datosorganizacion/datosorganizacion.component';
import { OrganodirectivaComponent } from './organodirectiva/organodirectiva.component';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SolicitudComponent,
    SubirdocumentosComponent,
    DatosorganizacionComponent,
    OrganodirectivaComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
