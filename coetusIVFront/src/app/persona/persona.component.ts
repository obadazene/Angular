import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../modelos/persona.modelos';
import {PersonaService} from './persona.service'
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

personas: Persona[];

  constructor(private router: Router, private personaService:PersonaService) { }

  ngOnInit() {
    this.personaService.getPersonas().subscribe(data =>{

      this.personas = data;
    })
  }

deletePersona(persona:Persona):void{
this.personaService.deletePersona(persona).subscribe(data =>{

  this.personas =this.personas.filter(p => p !== persona);
})


}



}
