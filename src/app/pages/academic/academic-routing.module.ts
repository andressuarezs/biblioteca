import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SubjectComponent} from './subject/subject.component';
import {GradesComponent} from './grades/grades.component';


const routes: Routes = [
  {
    path: 'subjects',
    component: SubjectComponent
  },
  {
    path: 'grades',
    component: GradesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicRoutingModule { }
