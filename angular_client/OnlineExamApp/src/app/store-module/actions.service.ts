import { Injectable } from '@angular/core';
import {NgRedux} from 'ng2-redux';

import { IAppState } from './appState';
import { addStudentAction, addTimeSpentAction, addProgressAction } from './action';
import { reducer } from './reducer';
import { createStore,Store } from 'redux';
import { IStudent, ItimeSpent, Iprogress } from './StoreSchema';
//import { store } from './shared-module.module';
export const store: Store<IAppState> = createStore(reducer,{student:[{firstName:'sam',lastName:'davis',Email:'sam@gmail.com'}],
timeSpent:[{questionNo:0,timeSpent:0}],progress:[{questionNo:0,data:""}]});


@Injectable()
export class ActionsService {
 //store: Store<IAppState> = createStore(reducer);

  constructor(private ngRedux:NgRedux<IAppState>) { ngRedux.provideStore(store)}
  addStudent(student:IStudent){
     this.ngRedux.dispatch(addStudentAction(student));
  }

  


  addTimeSpentAction(timeSpent:ItimeSpent){
    this.ngRedux.dispatch(addTimeSpentAction(timeSpent));
 }

 addProgress(progress:Iprogress){
  this.ngRedux.dispatch(addProgressAction(progress));
}
  

  getState(){
    return this.ngRedux.getState();
  }
}
