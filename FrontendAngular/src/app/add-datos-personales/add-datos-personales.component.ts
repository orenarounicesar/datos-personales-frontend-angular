import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PersonaService } from '../service/persona.service';
import { Persona } from '../models/persona';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-add-datos-personales',
  standalone: true,
  imports: [RouterLink,HttpClientModule, CommonModule],
  templateUrl: './add-datos-personales.component.html',
  styleUrl: './add-datos-personales.component.css'
})

export class AddDatosPersonalesComponent {

  private personaService=inject(PersonaService)

  persona?: Persona;


  addPersona(){
    this.persona = new Persona();
    this.persona.apellido1="Yaruro"
    this.persona.apellido2="Manjarres"
    this.persona.documento="58465"
    this.persona.nombre1="Andres"
    this.persona.nombre2="Felipe"
    this.persona.sexo="M"

    this.personaService.addPersona(this.persona)
    alert("Hola");
  }

  onAddPersona(persona: Persona): void {
    this.personaService.addPersona(persona).subscribe(res => {
      if (res) {
        alert(`El/la Señor@ ${persona.nombre1} se ha registrado con exito!`);

      } else {
        alert('Error! :(')
      }
    });
  }
}
