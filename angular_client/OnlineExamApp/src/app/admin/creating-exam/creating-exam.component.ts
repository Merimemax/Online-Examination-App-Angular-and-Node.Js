import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-creating-exam',
  templateUrl: './creating-exam.component.html',
  styleUrls: ['./creating-exam.component.css']
})
export class CreatingExamComponent implements OnInit {
  exam: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.exam = this.fb.group({
      examtitle: [''],
      examquestion: [''],
      examnumber: ['']
    })
  }

}
