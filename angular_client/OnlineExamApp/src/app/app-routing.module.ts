import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmissionStaffComponent } from './admission-staff/admission-staff.component';
import { NgReduxModule, NgRedux } from 'ng2-redux';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedModuleModule } from './store-module/shared-module.module';
import { AdmissionhomeComponent } from './admission-staff/admissionhome/admissionhome.component';

export const routes: Routes = [
  { path: 'addmissionstaff', component: AdmissionStaffComponent },
  { path: 'admissionhome', component: AdmissionhomeComponent},
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  { path: 'student', loadChildren: './student/student.module#StudentModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgReduxModule, FormsModule, SharedModuleModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });

