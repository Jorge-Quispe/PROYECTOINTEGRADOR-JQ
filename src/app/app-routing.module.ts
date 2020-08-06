import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { DatosorganizacionComponent } from './datosorganizacion/datosorganizacion.component';
import { OrganodirectivaComponent } from './organodirectiva/organodirectiva.component';
import { SubirdocumentosComponent } from './subirdocumentos/subirdocumentos.component';


const routes: Routes = [
  {path:'', component : HomeComponent},
  {path: "solicitud",component :SolicitudComponent},
   {path: 'datosorganizacion',component : DatosorganizacionComponent},
   {path: 'organodirectiva', component : OrganodirectivaComponent},
   {path: 'subirdocumentos', component : SubirdocumentosComponent},
   {path:'login',component : LoginComponent}
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
