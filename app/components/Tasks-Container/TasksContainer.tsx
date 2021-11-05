import React , {FC, useEffect} from 'react'
import { useAppDispatch } from '../../store/Slice_Hooks'
import { TasksContainerStyle } from './style/TasksContainer.styled'
import { getTasks } from './thunk/TasksContainer.thunk'

interface Props {
    
}

const TasksContainer: FC<Props> = ({ children, ...props }) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getTasks())
    }, [])
    return (
        <TasksContainerStyle>
            {children}
        </TasksContainerStyle>
    )
}

export default TasksContainer
