import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamIDEComponent } from './exam-ide.component';

describe('ExamIDEComponent', () => {
  let component: ExamIDEComponent;
  let fixture: ComponentFixture<ExamIDEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamIDEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamIDEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
