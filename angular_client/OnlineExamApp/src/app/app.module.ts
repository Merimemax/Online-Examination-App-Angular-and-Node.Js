import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing } from './app-routing.module';
import { AdmissionStaffComponent } from './admission-staff/admission-staff.component';
import { AuthenticationService } from 'src/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from 'src/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    AdmissionStaffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule
  ],
  providers: [AuthenticationService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
