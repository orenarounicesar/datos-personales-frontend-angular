import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';
import { Observable } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient) { }

  url:string = "https://192.168.7.1/api/Persona";

  getPersona(){
    return this.http.get(this.url)
    
  }

  public addPersona(persona:Persona):Observable<Persona>{
    return this.http.post<Persona>(this.url, persona);
  }

  public updatePersona(id:number, persona:Persona):Observable<Persona>{
    return this.http.put<Persona>(this.url + `/${id}`, persona);
  }


}
