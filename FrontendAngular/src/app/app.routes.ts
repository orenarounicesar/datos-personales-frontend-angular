import { Routes } from '@angular/router';
import { ActualizarDocumentoComponent }  from './actualizar-documento/actualizar-documento.component';
import { AddDatosPersonalesComponent } from './add-datos-personales/add-datos-personales.component';

export const routes: Routes = [
    {path: 'actualizar_routes', component: ActualizarDocumentoComponent },
    {path: "add", component: AddDatosPersonalesComponent},
    {path: "", redirectTo: "add", pathMatch: "full"}
];



     
  