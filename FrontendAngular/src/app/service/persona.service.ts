import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient) { }

  url = `${environment.apiUrlnet}/api/personalinformation`;
  
  urlpython= `${environment.apiUrlpython}/documents/byid`;

  //cambiar luego por la de python solo estaba probando en las variables de entorno :)
  //urljsonserver="http://localhost:3000/personas"
  

  getPersona_Id(id:number):Observable<Persona>{
    return this.http.get<Persona>(this.urlpython + `/${id}`);
  }

  public addPersona(persona:Persona):Observable<Persona>{
    return this.http.post<Persona>(this.url, persona);
  }
   
  public updatePersona(id:number, persona:Persona):Observable<Persona>{
    return this.http.put<Persona>(this.url + `/${id}`, persona);
  }


}
