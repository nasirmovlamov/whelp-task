import { TASKS_ADD_STATE } from './../../Tasks-Add/state/TasksAdd.state';
import { TASKS_CONTAINER_INTERFACE } from './../interfaces/TasksContainer.interface';


export const TASKS_CONTAINER_STATE:TASKS_CONTAINER_INTERFACE = { 
    tasks:[],
    task_add:TASKS_ADD_STATE,
    status: 'idle',
    sorting_type: 'inherit',
}