import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { TasksAddStyle, TasksAddStyle_left, TasksAddStyle_middle, TasksAddStyle_right } from './style/TasksAdd.style'
import { useAppDispatch, useAppSelector } from '../../store/Slice_Hooks'
import { addTask, fieldActiveSwithcer, fieldOnChage, field_active, field_value } from '../Tasks-Container/state-slice/TasksContainer.slice'


interface Props {
    
}

const TasksAdd = (props: Props) => {
    const fieldActive = useAppSelector(field_active)
    const fieldValue = useAppSelector(field_value)
    const dispatch  = useAppDispatch()
    
    const addTaskSubmitHandle = (e:any) => {
        e.preventDefault()
        if(fieldValue !== '')
        {
            dispatch(addTask(null))
            dispatch(fieldOnChage({task_value:""}))
        }
    }
    
    const fieldFocusHandler = () => {
        dispatch(fieldActiveSwithcer({field_active:false}))
    }
    const fieldBlurHandler = () => {
        dispatch(fieldActiveSwithcer({field_active:true}))
    }
    const fieldChangeHandler = (e:any) => {
        dispatch(fieldOnChage({task_value:e.target.value}))
    }


    return (
        <TasksAddStyle  onSubmit={addTaskSubmitHandle} active={fieldActive}>
            <TasksAddStyle_left>
                {
                    fieldActive ?
                    <FontAwesomeIcon icon={faPlus} /> 
                    :
                    <FontAwesomeIcon icon={faCircle} />
                }
            </TasksAddStyle_left>

            <TasksAddStyle_middle 
                value={fieldValue}
                placeholder="Add task"
                onFocus={fieldFocusHandler}
                onBlur={fieldBlurHandler} 
                onChange={fieldChangeHandler}
            />

            {fieldActive && <TasksAddStyle_right type="submit">ADD</TasksAddStyle_right>}
        </TasksAddStyle>
    )
}

export default TasksAdd
