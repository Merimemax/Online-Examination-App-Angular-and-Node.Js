import {IAppState} from './appState'

function addStudent(state,action):IAppState{
return Object.assign({},...state, action.payload)
}

export function  reducer(state:IAppState,action){
    switch(action.type){
        case 'ADD_STUDENT': return addStudent(state,action);
        default: return state;
    }
}