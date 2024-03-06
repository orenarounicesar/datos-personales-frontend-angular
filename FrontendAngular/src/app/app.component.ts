import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { ActualizarDocumentoComponent } from './actualizar-documento/actualizar-documento.component';

import { AddDatosPersonalesComponent } from './add-datos-personales/add-datos-personales.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, AddDatosPersonalesComponent, ActualizarDocumentoComponent, RouterLink]
})
export class AppComponent {
  title = 'FrontendAngular';
}
