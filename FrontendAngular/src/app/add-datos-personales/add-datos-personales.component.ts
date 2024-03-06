import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PersonaService } from '../service/persona.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-add-datos-personales',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './add-datos-personales.component.html',
  styleUrl: './add-datos-personales.component.css'
})
export class AddDatosPersonalesComponent {



  constructor(private personaService:PersonaService){
  }



  onAddPersona(persona:Persona):void{
    this.personaService.addPersona(persona).subscribe(res => {
      if(res){
        alert(`El/la Señor@ ${persona.nombre1} se ha registrado con exito!`);
        
      } else {
        alert('Error! :(')
      }
    });
}
}
