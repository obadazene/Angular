import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonaComponent} from './persona.component'
import {AddPersonaComponent} from './add-persona.component'


const routes: Routes = [
  { path: 'users', component: PersonaComponent },
  { path: 'add', component: AddPersonaComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
