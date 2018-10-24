import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamSignUpComponent } from './exam-sign-up/exam-sign-up.component';
import {RouterModule} from '@angular/router';
import { ExamIDEComponent } from './exam-ide/exam-ide.component';
import { CovalentCodeEditorModule } from '@covalent/code-editor';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { DBService } from './services/DB.Service';
import { WindowRef } from './services/WindowRef';
import { TimeSpentDirective } from './exam-ide/timespent.directive';
import { ErrorPageComponent } from './error-page/error-page.component';
import { EmailAuthGuard } from './services/EmailAuthGuard';


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
      {path:'exam',component:ExamIDEComponent},
      //{ path: 'tryexam', component: ErrorPageComponent, canActivate: [EmailAuthGuard] },
      { path: 'tryexam', redirectTo: 'exam', pathMatch: 'full' },
      { path: 'register', component: ErrorPageComponent }
      
    ])


  ],
  providers:[DBService,WindowRef,EmailAuthGuard],
  declarations: [ExamSignUpComponent, ExamIDEComponent,TimeSpentDirective, ErrorPageComponent]
})
export class StudentModule { }
