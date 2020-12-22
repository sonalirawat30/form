import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { LazyComponent } from './lazy/lazy.component';

@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { 
constructor(){
    console.log('Student module loaded')
 }
}