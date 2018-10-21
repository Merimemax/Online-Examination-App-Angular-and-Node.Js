import { Component, OnInit } from '@angular/core';
import{select} from 'ng2-redux';
import { Observable} from 'rxjs';

import { IStudent } from 'src/app/store-module/student';
import { ActionsService } from 'src/app/store-module/actions.service';

@Component({
  selector: 'app-exam-sign-up',
  templateUrl: './exam-sign-up.component.html',
  styleUrls: ['./exam-sign-up.component.css']
})
export class ExamSignUpComponent implements OnInit {
  @select('student') students:Observable<IStudent>;

  firstName; lastName; Email;

  constructor(private actionService:ActionsService) { }
  addStudent(){
    this.actionService.addStudentAction({firstName:this.firstName,lastName:this.lastName,Email:this.Email});
    console.log( this.actionService.getState());
  }

  ngOnInit() {
  }

}
