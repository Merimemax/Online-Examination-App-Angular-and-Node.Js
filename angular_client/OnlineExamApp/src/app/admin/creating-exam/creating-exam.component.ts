import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdminService, Exam } from '../admin.service';

@Component({
  selector: 'app-creating-exam',
  templateUrl: './creating-exam.component.html',
  styleUrls: ['./creating-exam.component.css']
})
export class CreatingExamComponent implements OnInit {
  exam: FormGroup;
  constructor(private fb: FormBuilder, private admin: AdminService) { }

  ngOnInit() {
    this.exam = this.fb.group({
      examtitle: [''],
      examquestion: [''],
      examnumber: ['4']
    })
  }
  newExam: Exam = {
    title: '',
    question: '',
    examnumber: 4
  }
  CreateExam() {
    this.newExam.title = this.exam.value.examtitle;
    this.newExam.question = this.exam.value.examquestion;
    this.newExam.examnumber = this.exam.value.examnumber;

    this.admin.createExam(this.newExam)
  }

}
