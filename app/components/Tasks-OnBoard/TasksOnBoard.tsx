import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../store/Slice_Hooks'
import Task from '../Task/Task'
import { onboard_tasks, sorting_type } from '../Tasks-Container/state-slice/TasksContainer.slice'
import { TasksOnBoardStyle } from './style/TasksOnBoard.style'
import moment from 'moment'
interface Props {
    
}

const TaskContainer = (props: Props) => {
    const sortingType = useAppSelector(sorting_type)
    const [sortedTasks, setsortedTasks] = useState([])

    const onBoardTasks = useAppSelector(onboard_tasks)

    

    



    return (
        <TasksOnBoardStyle>
            {
                (sortingType === 'inherit'
                && 
                onBoardTasks.map((task, index) => 
                    <Task key={index} task={task}/>
                ) )
                || 

                (sortingType === 'asc' &&
                onBoardTasks.sort((a, b) => {
                    if (a.task_content < b.task_content) {
                        return -1
                    }
                    if (a.task_content > b.task_content) {
                        return 1
                    }
                    return 0
                }).map((task, index) => 
                    <Task key={index} task={task}/>
                ))


                ||

                (sortingType === 'desc' &&
                onBoardTasks.sort((a, b) => {
                    if (a.task_content > b.task_content) {
                        return -1
                    }
                    if (a.task_content < b.task_content) {
                        return 1
                    }
                    return 0
                } ).map((task, index) =>
                    <Task key={index} task={task}/>
                ))

                ||

                (sortingType === 'recent' && 
                onBoardTasks.sort((a, b) => {
                    if (moment(a.task_created_at).isBefore(moment(b.task_created_at))) {
                        return -1
                    }
                    if (moment(a.task_created_at).isAfter(moment(b.task_created_at  ))) {
                        return 1
                    }
                    return 0
                }).map((task, index) =>
                    <Task key={index} task={task}/>
                ))

                ||

                (sortingType === 'short-to-long' &&
                onBoardTasks.sort((a, b) => {
                    if (a.task_content.length < b.task_content.length) {
                        return -1
                    }
                    if (a.task_content.length > b.task_content.length) {
                        return 1
                    }
                    return 0
                } ).map((task, index) =>
                    <Task key={index} task={task}/>
                ))

                ||

                (sortingType === 'long-to-short' &&
                onBoardTasks.sort((a, b) => {
                    if (a.task_content.length > b.task_content.length) {
                        return -1
                    }
                    if (a.task_content.length < b.task_content.length) {
                        return 1
                    }
                    return 0
                }
                ).map((task, index) =>
                    <Task key={index} task={task}/>
                ))
            }
        </TasksOnBoardStyle>
    )
}

export default TaskContainer
