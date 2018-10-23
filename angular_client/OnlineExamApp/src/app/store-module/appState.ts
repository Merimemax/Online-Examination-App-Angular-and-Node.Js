import {IStudent, ItimeSpent} from './StoreSchema'
export interface IAppState{
    student:IStudent[];
    timeSpent:ItimeSpent[];
}