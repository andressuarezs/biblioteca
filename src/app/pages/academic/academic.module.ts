import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicRoutingModule } from './academic-routing.module';
import { SubjectComponent } from './subject/subject.component';
import { GradesComponent } from './grades/grades.component';


@NgModule({
  declarations: [SubjectComponent, GradesComponent],
  imports: [
    CommonModule,
    AcademicRoutingModule
  ]
})
export class AcademicModule { }
