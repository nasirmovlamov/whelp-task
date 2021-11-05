import React, { useState } from 'react'
import { TasksHeaderStyle, TasksHeaderStyle_Date, TasksHeaderStyle_Left, TasksHeaderStyle_Right, TasksHeaderStyle_SorterButton, TasksHeaderStyle_SorterButtons } from './style/TasksHeader.style'
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faMinusCircle , faCalendarAlt, faSort, faSortAlphaDown, faSortAlphaUp, faSortAmountDown, faSortAmountUp, faSortNumericUpAlt } from '@fortawesome/free-solid-svg-icons'
import { selectSortingType } from '../Tasks-Container/state-slice/TasksContainer.slice';
import { useAppDispatch } from '../../store/Slice_Hooks';
interface Props {
    
}

const TasksHeader = (props: Props) => {
    const disptach = useAppDispatch()

    const Today = new Date()
    const TodayDate:any = moment(Today).format("dddd, MMMM Do YYYY")
    const [visibleSorterButtons, setvisibleSorterButtons] = useState(false)

    const selectSorter = (sorter:string) => {
        disptach(selectSortingType(sorter))
    }

    return (
        <TasksHeaderStyle>
            <TasksHeaderStyle_Left>
                <TasksHeaderStyle_Date>
                    {TodayDate}
                </TasksHeaderStyle_Date>
            </TasksHeaderStyle_Left>
            
            <TasksHeaderStyle_Right onBlur={() => setvisibleSorterButtons(false)} onFocus={() => setvisibleSorterButtons(true)}>
                Sort
                <FontAwesomeIcon icon={faSort}/>

                <TasksHeaderStyle_SorterButtons visible={visibleSorterButtons}>
                    <TasksHeaderStyle_SorterButton onClick={() => selectSorter('short-to-long')}>
                        <FontAwesomeIcon icon={faSortAmountUp}/>
                    </TasksHeaderStyle_SorterButton>

                    <TasksHeaderStyle_SorterButton onClick={() => selectSorter('long-to-short')}>
                        <FontAwesomeIcon icon={faSortAmountDown}/>
                    </TasksHeaderStyle_SorterButton>
                    
                    <TasksHeaderStyle_SorterButton onClick={() => selectSorter('asc')}>
                        <FontAwesomeIcon icon={faSortAlphaUp}/>
                    </TasksHeaderStyle_SorterButton>

                    <TasksHeaderStyle_SorterButton onClick={() => selectSorter('desc')}>
                        <FontAwesomeIcon icon={faSortAlphaDown}/>
                    </TasksHeaderStyle_SorterButton>

                    <TasksHeaderStyle_SorterButton onClick={() => selectSorter('recent')}>
                        <FontAwesomeIcon icon={faCalendarAlt}/>
                    </TasksHeaderStyle_SorterButton>

                    <TasksHeaderStyle_SorterButton onClick={() => selectSorter('inherit')}>
                        <FontAwesomeIcon icon={faMinusCircle}/>
                    </TasksHeaderStyle_SorterButton>
                </TasksHeaderStyle_SorterButtons>
            </TasksHeaderStyle_Right>
        </TasksHeaderStyle>
    )
}

export default TasksHeader
