import { Injectable } from '@angular/core';
import {NgRedux} from 'ng2-redux';

import { IStudent } from './student';
import { IAppState } from './appState';
import { addStudentAction } from './action';
import { reducer } from './reducer';
import { createStore,Store } from 'redux';
//import { store } from './shared-module.module';
export const store: Store<IAppState> = createStore(reducer);
@Injectable()
export class ActionsService {
 //store: Store<IAppState> = createStore(reducer);

  constructor(private ngRedux:NgRedux<IAppState>) { ngRedux.provideStore(store)}
  addStudentAction(student:IStudent){
     this.ngRedux.dispatch(addStudentAction(student));
  }

  getState(){
    return this.ngRedux.getState();
  }
}
