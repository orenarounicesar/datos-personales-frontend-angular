import { Component } from '@angular/core';
//import { DocumentoService } from '../documento.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-actualizar-documento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './actualizar-documento.component.html',
  styleUrls: ['./actualizar-documento.component.css']
})
export class ActualizarDocumentoComponent {
  id: string = '';
  tipoDocumento: string = '';
  documento: string = '';
  nombre1 : string='';
  nombre2 : string='';
  apellido1 : string='';
  apellido2 : string='';
  fechaNacimiento: Date | undefined;
  sexo: string='';

  constructor() { }

  actualizarDocumento() {
    const data = {
      tipoDocumento: this.tipoDocumento,
      documento: this.documento,
      nombre1: this.nombre1,
      nombre2: this.nombre2,
      apellido1: this.apellido1,
      apellido2: this.apellido2,
      fechaNacimiento: this.fechaNacimiento,
      sexo: this.sexo
    };

    //this.documentoService.updateDocumento(this.id, data)
     // .subscribe(response => {
      //  console.log('Documento actualizado:', response);
      //}, error => {
        //console.error('Error al actualizar el documento:', error);
      //});
  }
}

