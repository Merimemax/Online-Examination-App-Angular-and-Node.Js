import { IStudent, ItimeSpent } from "./StoreSchema";

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