import { faCheck,  faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCircle} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { TaskStyle, TaskStyle_delete, TaskStyle_edit, TaskStyle_left, TaskStyle_middle, TaskStyle_right ,} from './style/Task.style'
import { TASK_INTERFACE } from './interfaces/Task.interface'
import { useAppDispatch } from '../../store/Slice_Hooks'
import { completeTask, deleteTask, editTask } from '../Tasks-Container/state-slice/TasksContainer.slice'

interface Props {
    task:TASK_INTERFACE
}

const Task = (props: Props) => {
    const dispatch = useAppDispatch()
    const {task} = props
    const completeTaskHandle = () => {
        dispatch(completeTask({id:task.task_id}))
    }  
    const updateTaskHandle = () => {
        dispatch(editTask({id:task.task_id}))
    } 
    const deleteTaskHandle = () => {
        dispatch(deleteTask({id:task.task_id}))
    }       

    
    return (
        <TaskStyle>
            <TaskStyle_left onClick={completeTaskHandle} task_status={task.task_status}>
                {
                    task.task_status === 'completed' ?
                    <FontAwesomeIcon icon={faCheck} />:
                    <FontAwesomeIcon icon={faCircle} />
                }
                
                <FontAwesomeIcon icon={faCircle} />
            </TaskStyle_left>

            <TaskStyle_middle 
                disabled={task.task_status === 'completed' ? true : false} 
                task_status={task.task_status} 
                value={task.task_content} 
                onChange={updateTaskHandle}
            />


            {
                task.task_status === 'completed' 
                &&
                <TaskStyle_right>
                    <TaskStyle_delete onClick={deleteTaskHandle}>
                        <FontAwesomeIcon icon={faTrash} />
                    </TaskStyle_delete>
                </TaskStyle_right>
            }
            
        </TaskStyle>
    )
}

export default Task
