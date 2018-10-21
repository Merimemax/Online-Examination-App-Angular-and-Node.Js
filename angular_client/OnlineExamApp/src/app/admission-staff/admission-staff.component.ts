import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Staff } from './staff';


@Component({
  // selector: 'app-admission-staff',
  templateUrl: './admission-staff.component.html',
  styleUrls: ['./admission-staff.component.css']
})
export class AdmissionStaffComponent implements OnInit {
  staff_credential: Staff;
  admissionStaff: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.admissionStaff = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      rememberme: true
    });

  }
  logInStaff() {
    console.log("you will log in one day dont give up " + this.admissionStaff.value.email);
    console.log("you will log in one day dont give up " + this.admissionStaff.value.password);
    console.log("you will log in one day dont give up " + this.admissionStaff.value.rememberme);

  }

}
