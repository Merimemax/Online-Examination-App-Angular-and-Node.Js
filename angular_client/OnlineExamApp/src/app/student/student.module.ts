import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamSignUpComponent } from './exam-sign-up/exam-sign-up.component';
import {RouterModule} from '@angular/router';
import { ExamIDEComponent } from './exam-ide/exam-ide.component';
import { CovalentCodeEditorModule } from '@covalent/code-editor';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  imports: [
    CommonModule,
    CovalentCodeEditorModule,
    FormsModule,
    HttpClientModule
    ,
      RouterModule.forChild([
      {path:'',component:ExamSignUpComponent,children:[
        
      ] },
      {path:'exam',component:ExamIDEComponent}
      
    ])


  ],
  declarations: [ExamSignUpComponent, ExamIDEComponent]
})
export class StudentModule { }
