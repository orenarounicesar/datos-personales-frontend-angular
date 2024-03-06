import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';


@Injectable({
    providedIn: 'root'
})

export class PersonaService {
    constructor() { }

    persona!: Persona;
    get(){this.persona; }

}
