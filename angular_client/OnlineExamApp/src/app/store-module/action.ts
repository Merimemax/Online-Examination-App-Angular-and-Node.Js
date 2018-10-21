import { IStudent } from "./student";

export const ADD_STUDENT='ADD_STUDENT';
export function addStudentAction(student:IStudent){
    return {
        type:ADD_STUDENT,
        payload: student
    }
}