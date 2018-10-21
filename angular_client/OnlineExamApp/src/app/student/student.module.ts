import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamSignUpComponent } from './exam-sign-up/exam-sign-up.component';
import { SharedModuleModule } from '../store-module/shared-module.module';
import {RouterModule} from '@angular/router';
import { ExamIDEComponent } from './exam-ide/exam-ide.component';
@NgModule({
  imports: [
    CommonModule,
      RouterModule.forChild([
      {path:'',component:ExamSignUpComponent }
    ])


  ],
  declarations: [ExamSignUpComponent, ExamIDEComponent]
})
export class StudentModule { }
