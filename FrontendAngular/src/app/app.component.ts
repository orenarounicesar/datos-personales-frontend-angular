import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActualizarDocumentoComponent } from './actualizar-documento/actualizar-documento.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ActualizarDocumentoComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontendAngular';
}
