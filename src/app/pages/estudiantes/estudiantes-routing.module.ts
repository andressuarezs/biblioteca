import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EstudiantesComponent} from './estudiantes.component';


const routes: Routes = [
  {
    path: 'information',
    component: EstudiantesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudiantesRoutingModule { }
