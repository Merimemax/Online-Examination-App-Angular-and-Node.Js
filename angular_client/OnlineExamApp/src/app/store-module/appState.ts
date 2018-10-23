import {IStudent, ItimeSpent, Iprogress} from './StoreSchema'
export interface IAppState{
    student:IStudent[];
    timeSpent:ItimeSpent[];
    progress:Iprogress[];
}