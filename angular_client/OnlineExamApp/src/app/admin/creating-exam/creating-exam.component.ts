import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdminService, Exam } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creating-exam',
  templateUrl: './creating-exam.component.html',
  styleUrls: ['./creating-exam.component.css']
})
export class CreatingExamComponent implements OnInit {
  exam: FormGroup;
  examQeustions: Exam[];
  constructor(private fb: FormBuilder, private admin: AdminService) { }

  ngOnInit() {
    this.exam = this.fb.group({
      examtitle: [''],
      examquestion: [''],
      examnumber: ['4']
    })
    this.examQeustions = this.admin.getExams();
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
    window.location.reload();
  }
  deletExam(examnumber) {
    console.log(examnumber);
  }

}
