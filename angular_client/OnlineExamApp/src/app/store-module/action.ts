import { IStudent, ItimeSpent, Iprogress } from "./StoreSchema";

export const ADD_STUDENT='ADD_STUDENT';
export function addStudentAction(student:IStudent){
    return {
        type:ADD_STUDENT,
        payload: student
    }
}

export function addTimeSpentAction(timeSpent:ItimeSpent){
    return {
        type:'ADD_TIME',
        payload: timeSpent
    }
}

export function addProgressAction(progress:Iprogress){
    return {
        type:'ADD_PROGRESS',
        payload: progress
    }
}