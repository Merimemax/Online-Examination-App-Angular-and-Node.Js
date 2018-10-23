import {IAppState} from './appState'

function addStudent(state,action):IAppState{
 
return Object.assign({},...state, action.payload)
}


export function  reducer(state:IAppState,action){
    switch(action.type){
 
        case 'ADD_TIME': return Object.assign({},state,{timeSpent:[...state.timeSpent,action.payload]});
        case 'ADD_STUDENT': return Object.assign({},state,{student:[...state.student,action.payload]})
         default: return state;
    }
}