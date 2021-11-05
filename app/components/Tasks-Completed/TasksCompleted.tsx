import React from 'react'
import { useAppSelector } from '../../store/Slice_Hooks'
import Task from '../Task/Task'
import { completed_tasks } from '../Tasks-Container/state-slice/TasksContainer.slice'
import { TasksCompletedStyle } from './style/TasksCompleted.style'

interface Props {
    
}

const TasksCompleted= (props: Props) => {
    const completedTasks = useAppSelector(completed_tasks)
    return (
        <TasksCompletedStyle>
            {completedTasks.map((task, index) => 
                <Task key={index} task={task}/>
            )
            }
        </TasksCompletedStyle>
    )
}

export default TasksCompleted
