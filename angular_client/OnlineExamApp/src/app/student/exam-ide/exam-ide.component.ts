import { Component, OnInit } from '@angular/core';
import { DBService } from '../services/DB.Service';

@Component({
  selector: 'app-exam-ide',
  templateUrl: './exam-ide.component.html',
  styleUrls: ['./exam-ide.component.css']
})
export class ExamIDEComponent implements OnInit {
questions;
  constructor(private db:DBService) { }

  ngOnInit() {
  this.db.getQuestion().subscribe(data=>{ this.questions=data})
   }

}
