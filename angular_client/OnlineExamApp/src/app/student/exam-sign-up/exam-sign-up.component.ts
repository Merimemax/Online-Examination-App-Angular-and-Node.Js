import { Component, OnInit } from '@angular/core';
import{select} from 'ng2-redux';
import { Observable} from 'rxjs';

import { IStudent } from 'src/app/store-module/StoreSchema';
import { ActionsService } from 'src/app/store-module/actions.service';
import { DBService } from '../services/DB.Service';

@Component({
  selector: 'app-exam-sign-up',
  templateUrl: './exam-sign-up.component.html',
  styleUrls: ['./exam-sign-up.component.css']
})
export class ExamSignUpComponent implements OnInit {
  @select('student') students:Observable<IStudent>;
  
  firstName; lastName; Email;

  constructor(private actionService:ActionsService,private dbService:DBService) { }
  
  addStudent(){
  //  this.actionService.addStudent({firstName:this.firstName,lastName:this.lastName,Email:this.Email});
    this.dbService.addStudent(
      {
      fristname :this.firstName,
			lastname : this.lastName,
			email : this.Email,
			status : 'not sent',
			isAnswered : false,
			result : false
      }
    ).subscribe(
      data=>{ console.log(data)},err=>console.error(err));;
  }

  ngOnInit() {
  }

}
