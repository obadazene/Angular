import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from '../modelos/persona.modelos';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PersonaService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8080/user-portal/users';
  //private userUrl = '/api';

  public getPersonas() {
    return this.http.get<Persona[]>(this.userUrl);
  }

  public deletePersona(persona) {
    return this.http.delete(this.userUrl + "/"+ persona.id);
  }

  public createPersona(persona) {
    return this.http.post<Persona>(this.userUrl, persona);
  }

}
