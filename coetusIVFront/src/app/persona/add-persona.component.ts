import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../modelos/persona.modelos';
import { PersonaService } from './persona.service';

@Component({
  templateUrl: './add-persona.component.html'
})
export class AddPersonaComponent {

  persona: Persona= new Persona();

  constructor(private router: Router, private personaService: PersonaService) {

  }

  createUser(): void {
    this.personaService.createPersona(this.persona)
        .subscribe( data => {
          alert("Persona created successfully.");
        });

  };

}
