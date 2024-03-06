import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient) { }

  url:string = "https://192.168.7.1/api/Persona";

  getPersona(){
    return this.http.get(this.url);
  }

  addPersona(persona:Persona):Observable<Persona>{
    return this.http.post<Persona>(this.url, persona);
  }

  updatePersona(id:number, persona:Persona):Observable<Persona>{
    return this.http.put<Persona>(this.url + `/${id}`, persona);
  }


}
