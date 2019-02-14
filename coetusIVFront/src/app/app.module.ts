import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import {PersonaService} from './persona.service';


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent
    
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
