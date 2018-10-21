import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { CreatingExamComponent } from './creating-exam/creating-exam.component';
import { ManagingStaffComponent } from './managing-staff/managing-staff.component';
import { routing } from './adminRoutes'
import { ReactiveFormsModule } from '@angular/forms';
import { AdminhomeComponent } from './adminhome/adminhome.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    AdminLoginComponent,
    EvaluationComponent,
    CreatingExamComponent,
    ManagingStaffComponent,
    AdminhomeComponent
  ],
  exports: [
    AdminLoginComponent,
    EvaluationComponent,
    CreatingExamComponent,
    ManagingStaffComponent
  ]
})
export class AdminModule { }
