import { Routes } from '@angular/router';
import { ActualizarDocumentoComponent } from './actualizar-documento/actualizar-documento.component';
import { AddDatosPersonalesComponent } from './add-datos-personales/add-datos-personales.component';
import { ListarDatosPersonalesComponent } from './listar-datos-personales/listar-datos-personales.component';

export const routes: Routes = [
    { 
        path: 'add_page', 
        component: AddDatosPersonalesComponent 
    },
    {
        path: 'actualizar_page',
        component: ActualizarDocumentoComponent,
    },
    { 
        path: 'listar_page', 
        component: ListarDatosPersonalesComponent },
    { 
        path: '', 
        redirectTo: 'add_page', 
        pathMatch: 'full' 
    }
];
