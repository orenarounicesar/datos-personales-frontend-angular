import { Component, OnInit, inject, input } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
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
  
   private personaService=inject(PersonaService)
   private formb = inject(FormBuilder)
  
   form?:FormGroup; 

  onBuscarPersona_Id(persona:Persona):void{
    this.personaService.getPersona_Id(persona.id).subscribe(res => {
    if (res) {
      
      alert(`la persona con ID: ${persona.id} ¡encontrada con exito!` )
      console.log(res);
      this.persona=res;


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

