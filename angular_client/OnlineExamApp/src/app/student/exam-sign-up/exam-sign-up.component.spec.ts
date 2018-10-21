import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamSignUpComponent } from './exam-sign-up.component';

describe('ExamSignUpComponent', () => {
  let component: ExamSignUpComponent;
  let fixture: ComponentFixture<ExamSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
