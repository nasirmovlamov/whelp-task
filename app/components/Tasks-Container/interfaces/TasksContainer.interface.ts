import { TASKS_ADD_INTERFACE } from './../../Tasks-Add/interfaces/TasksAdd.interface';
import { TASK_INTERFACE } from "../../Task/interfaces/Task.interface";

export interface TASKS_CONTAINER_INTERFACE {
    tasks:TASK_INTERFACE[],
    task_add:TASKS_ADD_INTERFACE,
    status:'loading' | 'idle'
    sorting_type: 'inherit' | 'asc' | 'desc' | 'long-to-short' | 'short-to-long' | 'recent',

}