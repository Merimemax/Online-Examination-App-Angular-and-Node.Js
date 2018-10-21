import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgReduxModule, NgRedux } from 'ng2-redux';
import { reducer } from './reducer';
import {
  applyMiddleware,
  Store,
  combineReducers,
  compose,
  createStore
} from 'redux';
import { IAppState } from './appState';
import { ActionsService } from './actions.service';


//export const store: Store<IAppState> = createStore(reducer);
 
@NgModule({
  imports: [
    CommonModule,
    NgReduxModule
  ],
  declarations: [],
  
})
export class SharedModuleModule {
//   constructor( ngRedux: NgRedux<IAppState>) {
// ngRedux.provideStore(store);
//   }

static forRoot(): ModuleWithProviders {
  return {
    ngModule: SharedModuleModule,
    providers: [ActionsService]
  };
}
 
  
 }
