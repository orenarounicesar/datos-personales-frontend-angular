import { Component, input } from '@angular/core';
//import { DocumentoService } from '../documento.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { PersonaService } from '../service/persona.service';
import { Persona } from '../models/persona';
@Component({
  selector: 'app-actualizar-documento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './actualizar-documento.component.html',
  styleUrls: ['./actualizar-documento.component.css']
})
export class ActualizarDocumentoComponent {
  persona:Persona=new Persona();
  

  constructor(private personaService:PersonaService) { }


  

  onActualizarPersona(persona:Persona):void{
    this.personaService.updatePersona(persona.id, persona).subscribe(res => {
      if(res){
        alert(`La persona número ${persona.id} se ha modificado con exito!`);
        
      } else {
        alert('Error! :(')
      }
    });
  }
}

