import { Component, OnInit, inject, input } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { PersonaService } from '../service/persona.service';
import { Persona } from '../models/persona';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar-documento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './actualizar-documento.component.html',
  styleUrls: ['./actualizar-documento.component.css']
})
export class ActualizarDocumentoComponent {
   persona:Persona=new Persona();
  
   private personaService=inject(PersonaService)
   private formb = inject(FormBuilder)
  
   form?:FormGroup; 

  onBuscarPersona_Id(persona:Persona):void{
   const persona_id= this.personaService.getPersona_Id(persona.id).subscribe(res => {
    if (res) {
      
      alert(`la persona con ID: ${persona.id} ¡encontrada con exito!` )
      this.form = this.formb.group({
         campo_id:[res.id],
         campo_tipoDocumento:[res.tipoDocumento],
         campo_Nombre1:[res.nombre1],
         campo_Nombre2:[res.nombre2],
         campo_Apellido1:[res.apellido1],
         campo_Apellido2:[res.apellido2],
         campo_Fecha:[res.fechaNacimiento],
         campo_Sexo:[res.sexo]
      });

    } else {

      alert (`Algo fallo!! Revisar id ingresado`)

    }
   })
  };  

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

