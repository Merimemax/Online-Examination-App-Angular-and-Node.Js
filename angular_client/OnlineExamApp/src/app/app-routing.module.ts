import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmissionStaffComponent } from './admission-staff/admission-staff.component';

const routes: Routes = [
  { path: 'addmissionstaff', component: AdmissionStaffComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
