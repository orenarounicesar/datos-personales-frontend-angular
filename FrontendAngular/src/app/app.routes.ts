import { Routes } from '@angular/router';
import { ActualizarDocumentoComponent } from './actualizar-documento/actualizar-documento.component';
import { AddDatosPersonalesComponent } from './add-datos-personales/add-datos-personales.component';

export const routes: Routes = [
    {
        path: 'actualizar_page',
        component: ActualizarDocumentoComponent,
    },
    { 
        path: 'add_page', 
        component: AddDatosPersonalesComponent },
    { 
        path: '', 
        redirectTo: 'add_page', 
        pathMatch: 'full' },
];
